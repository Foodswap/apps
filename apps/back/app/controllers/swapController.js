const {
    Author
} = require('../models');
const Swap = require('../models/swap');



const swapController = {
    swapProposal: async (request, response) => {
        const swapToSave = request.body;
        swapToSave.date = Date.now();
        swapToSave.status = 0;

        try {
            const swap = await Swap.create(swapToSave);
            response.status(201).json(swap);
        } catch (error) {
            console.log(error);
            response.status(500);
        }
    },

    getSwap: async (request, response) => {
        const mealAttributes = ['id', 'name'];
        const authorAttributes = ['id', 'username'];
        try {
            console.log(request.params.id)
            const swapOffer = await Swap.findAll(
                
             {
                attributes: ['id', 'status', 'date'],
                include: ['mealOffer', {
                    association: 'mealOffer',
                    attributes: mealAttributes,
                    where:{author_id: request.params.id},
                    include: ['asker', {
                        association: 'asker',
                        attributes: authorAttributes
                    }]
                }, 'mealRequest', {
                    association: 'mealRequest',
                    attributes: mealAttributes,
                    include: ['receiver', {
                        association: 'receiver',
                        attributes: authorAttributes
                    }]

                }]
            })


            response.status(200).json(swapOffer)
        } catch (err) {
            console.log(err);
            response.status(500);
        }
    }
}


module.exports = swapController;