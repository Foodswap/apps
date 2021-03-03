const Auhtor = require('../models/author');

const authorController = {
    
    signup: async (request, response) => {
        console.log(request.body)
        const author = new Author(request.body);
        console.log(author)

        try {
            await author.save();

            response.json(author);
        } catch(err) {
            console.trace(err)
            response.status(403).json(err.message);
        }
    }
};

module.exports = authorController;

