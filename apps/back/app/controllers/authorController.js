const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Author = require('../models/author');

const authorController = {
    
    signup: async (request, response) => {
        const author = new Author(request.body);
        try {
            const userEmail = await Author.findOne({where:{email:request.body.email}});
            if(userEmail) {
                response.status(409).json("Une erreur est survenue : email déjà enregistré.");
            };
            author.password = bcrypt.hashSync(request.body.password, 10);
            await author.save();
            author.password = null;
            response.status(201).json(author);
        } catch(err) {
            console.trace(err);
            response.status(500).json("Une erreur est survenue lors de l'inscription.");
        }
    },

    
    login: async (request, response) => {
        const accessTokenSecret = 'foodswaptokensecret'
        const author = new Author(request.body);
        try {
            const authorConnect = await Author.findOne({
                where:{
                    email:request.body.email
                }
            });
            if(!authorConnect) {
                response.status(401).json("Une erreur est survenue : email ou mdp non valide.")
            };
            if(!bcrypt.compareSync(request.body.password, author.password)) {
                response.status(401).json("Une erreur est survenue : email ou mdp non valide.")
            };
            if(authorConnect) {
                const accessToken = jwt.sign({username: author.username}, accessTokenSecret);

                response.json({
                    accessToken
                });
            }
        } catch(err) {
            console.log(err);
        };
    },
     
};

module.exports = authorController;

