const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Author = require('../models/author');

const authorController = {
  /**
   * GET /v1/author/{authorId}
   *
   * @summary Get one Author by id
   * @tags Author
   *
   * @param {number} authorId.path - id of Author
   *
   * @return {AuthorDto} 200 - success response - application/json
   * @return {ErrorDto} 404 - bad request response
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 200 - an author returns by api
   * {
   *   "username": "John Doe",
   *   "email": "john@mail.fr",
   *   "city": "Paris"
   * }
   * @example response - 404 - an error of bad request
   * {
   *   "error": 404,
   *   "message": "User not found"
   * }
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  getOneAuthor: async (request, response) => {
    try {
      const author = await Author.findByPk(Number(request.params.id), {
        attributes: {
          exclude: ['password'],
        },
      });

      if (author) {
        response.status(200).json(author);
      } else {
        response.status(404).json({ error: 404, message: 'User not found' });
      }
    } catch (err) {
      response.status(500).json({ error: 500, message: err });
    }
  },

  /**
   * POST /v1/signup
   *
   * @tags Auth
   *
   * @summary Register to the app
   *
   * @param {AuthorBody} request.body.required - author info - application/json
   *
   * @return {AuthorDto} 201 - success response - application/json
   * @return {ErrorDto} 409 - bad request response
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 201 - an author returns by api
   * {
   *   "id": 42,
   *   "username": "John Doe",
   *   "email": "john@mail.fr",
   *   "city": "Paris"
   * }
   * @example response - 409 - email exists
   * {
   *   "error": 409,
   *   "message": "Email already registered"
   * }
   * @example response - 409 - user exists
   * {
   *   "error": 409,
   *   "message": "User already exists"
   * }
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  signup: async (request, response) => {
    const author = new Author(request.body);

    try {
      const userEmail = await Author.findOne({
        where: { email: request.body.email },
      });

      if (userEmail) {
        return response.status(409).json({ error: 409, message: 'Email already registered' });
      }

      const userName = await Author.findOne({
        where: { username: request.body.username },
      });

      if (userName) {
        return response.status(409).json({ error: 409, message: 'User already exists' });
      }

      author.password = bcrypt.hashSync(request.body.password, 10);
      await author.save();

      const authorDto = author.toJSON();
      delete authorDto.password;

      return response.status(201).json(authorDto);
    } catch (err) {
      return response
        .status(500)
        .json({ error: 500, message: err });
    }
  },

  /**
   * POST /v1/login
   *
   * @tags Auth
   *
   * @summary login to the app
   *
   * @param {LoginBody} request.body.required - author credentials - application/json
   *
   * @return {AuthenticatedAuthorDto} 200 - success response - application/json
   * @return {ErrorDto} 401 - bad request response
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 200 - authenticated author with jwtoken
   * {
   *   "accessToken": "Bearer eyJhbGciOiJIUzI1N...",
   *   "author": {
   *     "id": 42,
   *     "username": "John Doe",
   *     "email": "john@mail.fr",
   *     "city": "Paris"
   *   }
   * }
   * @example response - 401 - email or password invalid
   * {
   *   "error": 401,
   *   "message": "there is an error on the email or password"
   * }
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  login: async (request, response) => {
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
    try {
      const author = await Author.findOne({
        where: {
          email: request.body.email,
        },
      });

      if (
        !author || !bcrypt.compareSync(request.body.password, author.password)
      ) {
        return response.status(401).json({ error: 401, message: 'there is an error on the email or password' });
      }
      author.password = null;

      const accessToken = `Bearer ${jwt.sign(
        { username: author.username },
        accessTokenSecret,
      )}`;

      return response.json({
        accessToken,
        author,
      });
    } catch (err) {
      return response
        .status(500)
        .json({ error: 500, message: err });
    }
  },

  /**
   * PUT /v1/author/update/{authorId}
   *
   * @tags Auth
   *
   * @param {string} authorId.path - id of the Author
   * @summary update informations of an Author
   *
   * @param {AuthorBody} request.body.required - author info - application/json
   * @return {AuthorDto} 201 - success response - application/json
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 201 - author with new informations
   * {
   *   "username": "John Doe",
   *   "email": "john@mail.fr",
   *   "city": "Paris",
   *   "latitude": 42.452,
   *   "longitude": 1.451
   * }
   *
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  updateInformations: async (request, response, next) => {
    const informationsToUpdate = request.body;
    // on recupere l'id dans la route pour l'instant
    const id = Number(request.params.id);

    try {
      const author = await Author.findByPk(id);
      if (!author) {
        next();
      }

      Object.keys(informationsToUpdate).forEach((info) => {
        // eslint-disable-next-line no-prototype-builtins
        if (author.get({ plain: true }).hasOwnProperty(info)) {
          author[info] = informationsToUpdate[info];
        }
      });

      await author.save();

      Author.findByPk(Number(author.id), {
        attributes: {
          exclude: ['password'],
        },
      }).then((updatedAuthor) => {
        response.status(201).json(updatedAuthor);
      });
    } catch (err) {
      response.status({ error: 500, message: err });
    }
  },

};

module.exports = authorController;
