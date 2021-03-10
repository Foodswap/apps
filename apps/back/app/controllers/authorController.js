const bcrypt = require('bcrypt');
//const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const Author = require('../models/author');

const authorController = {

    getOneAuthor: async (request, response) => {
        try {
            const author = await Author.findByPk(Number(request.params.id));
            response.status(200).json(author);
        } catch (err) {
            console.trace(err);
            response.status(404).json("User not found");
        }
    },
    
    signup: async (request, response) => {
        const author = new Author(request.body);
        try {
            const userEmail = await Author.findOne({where:{email:request.body.email}});
            if(userEmail) {
                response.status(409).json("Email déjà enregistré");
            };
            const userName = await Author.findOne({where:{username:request.body.username}});
            if(userName) {
                response.status(409).json("Nom utilisateur déjà enregistré");
            };
            author.password = bcrypt.hashSync(request.body.password, 10);
            await author.save();
            author.password = null;
            response.status(201).json(author);
        } catch(err) {
            console.trace(err);
            response.status(500).json("Une erreur est survenue lors de l'inscription");
        };
    },

    
    login: async (request, response) => {
        const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
        try {
            const author = await Author.findOne({
                where:{
                    email:request.body.email
                },
            });
            if(!author || !bcrypt.compareSync(request.body.password, author.password)) {
                
                response.status(401).json("Email ou mdp non valide.");
    
            } else {
                author.password = null;
                const accessToken = "Bearer "+ jwt.sign({username: author.username}, accessTokenSecret);
                response.set("Authorization", accessToken).json({
                    author
                })
            };
        } catch(err) {
            console.log(err);
            response.status(500).json("Une erreur est survenue lors de l'authentification")
        };
    },
     
};

module.exports = authorController;

