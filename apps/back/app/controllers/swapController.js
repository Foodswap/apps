const Swap = require('../models/swap');

const mealAttributes = ['id', 'name'];
const authorAttributes = ['id', 'username', 'email'];

const swapService = {
    buildRequest: (authorId, type) => {
        let request = {
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
                attributes: mealAttributes,
                include: ['receiver', {
                    association: 'receiver',
                    attributes: authorAttributes
                }]

            }]
        }

        request.include[type === 'mealOffer' ? 1 : 3].where = {author_id: authorId}

        return request;
    }
}

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
        try {
            const sequelizeRequest = swapService.buildRequest(request.params.id, "mealOffer")
            const swapOffer = await Swap.findAll(sequelizeRequest)
            response.status(200).json(swapOffer)
        } catch (err) {
            console.log(err);
            response.status(500);
        }
    },
    getSwapReceiver: async (request, response) => {

        try {
            const sequelizeRequest = swapService.buildRequest(request.params.id, "mealRequest")
            const swapRequest = await Swap.findAll(sequelizeRequest)
            response.status(200).json(swapRequest)
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
            console.log(error);
            response.status(500);
        }
    }
}


module.exports = swapController;