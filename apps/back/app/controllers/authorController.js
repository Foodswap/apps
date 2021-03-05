const bcrypt = require('bcrypt');
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
};

module.exports = authorController;

