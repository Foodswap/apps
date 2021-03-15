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

    getSwapAsker: async (request, response) => {
        const mealAttributes = ['id', 'name'];
        const authorAttributes = ['id', 'username', 'email'];
        try {
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
    },
    getSwapReceiver: async (request, response) => {
        const mealAttributes = ['id', 'name'];
        const authorAttributes = ['id', 'username', 'email'];
        try {
            const swapOffer = await Swap.findAll(
             {
                attributes: ['id', 'status', 'date'],
                include: ['mealOffer', {
                    association: 'mealOffer',
                    attributes: mealAttributes,
                    include: ['asker', {
                        association: 'asker',
                        attributes: authorAttributes
                    }]
                }, 'mealRequest', {
                    association: 'mealRequest',
                    where:{author_id: request.params.id},
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
    },

    updateSwap : async (request, response, next) => {
        const id = Number(request.params.id);
        const data = request.body;
        try {
            const swap = await Swap.findByPk(id);
            if (!swap) {
                next();
            }
            for (const field in data) {
                if (typeof swap[field] !== 'undefined') {
                
                    swap[field] = data[field];
                }
            };
            await swap.save();
            response.status(200).json(swap);

        } catch (error) {
            console.log(err);
            response.status(500);
        }
    }
}


module.exports = swapController;