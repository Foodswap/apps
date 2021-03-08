const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Author = require('../models/author');

const authorController = {
    
    signup: async (request, response) => {
        const author = new Author(request.body);
        try {
            const userEmail = await Author.findOne({where:{email:request.body.email}});
            if(userEmail) {
                response.status(409).json("Email déjà enregistré.");
            };
            const userName = await Author.findOne({where:{username:request.body.username}});
            if(userName) {
                response.status(409).json("Nom utilisateur déjà enregistré.");
            };
            author.password = bcrypt.hashSync(request.body.password, 10);
            await author.save();
            author.password = null;
            response.status(201).json(author);
        } catch(err) {
            console.trace(err);
            response.status(500).json("Une erreur est survenue lors de l'inscription.");
        };
    },

    
    login: async (request, response) => {
        const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
        try {
            const author = await Author.findOne({
                where:{
                    email:request.body.email
                }
            });
            if(!author) {
                response.status(401).json("Email ou mdp non valide.");
                return;
            };
            if(!bcrypt.compareSync(request.body.password, author.password)) {
                response.status(401).json("Email ou mdp non valide.")
                return;
            };
            if(author) {
                const accessToken = "Bearer "+ jwt.sign({username: author.username}, accessTokenSecret);

                response.set("Authorization", accessToken).json({
                    accessToken
                });
            };
        } catch(err) {
            console.log(err);
            response.status(500).json("Une erreur est survenue lors de l'authentification.")
        };
    },
     
};

module.exports = authorController;

