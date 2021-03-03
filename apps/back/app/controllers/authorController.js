const Author = require('../models/author');

const authorController = {
    
    signup: async (request, response) => {
        console.log(request.body)
        const author = new Author(request.body);
        console.log(author)

        try {
            await author.save();
            author.password = null;
            response.status(201).json(author);
        } catch(err) {
            console.trace(err);
            response.status(500).json("Une erreur est survenue lors de l'inscription.");
        }
    }
};

module.exports = authorController;

