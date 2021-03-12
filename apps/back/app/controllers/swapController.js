const Swap = require('../models/swap');

const swapController = {
    swapProposal: async (request, response) => {
        const swapToSave = request.body;
        swapToSave.date = Date.now();
        swapToSave.status = 0;
        
        try{
            const swap = await Swap.create(swapToSave);
            response.status(201).json(swap);
        } catch(error) {
            console.log(error);
            response.status(500);
        }
    },
}

module.exports = swapController;