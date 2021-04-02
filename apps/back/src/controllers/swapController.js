const Swap = require('../models/swap');

const mealAttributes = ['id', 'name'];
const authorAttributes = ['id', 'username', 'email'];

const swapService = {
  buildRequest: (authorId, type) => {
    const request = {
      attributes: ['id', 'status', 'date'],
      include: [
        'mealOffer',
        {
          association: 'mealOffer',
          attributes: mealAttributes,
          include: [
            'asker',
            {
              association: 'asker',
              attributes: authorAttributes,
            },
          ],
        },
        'mealRequest',
        {
          association: 'mealRequest',
          attributes: mealAttributes,
          include: [
            'receiver',
            {
              association: 'receiver',
              attributes: authorAttributes,
            },
          ],
        },
      ],
    };

    request.include[type === 'mealOffer' ? 1 : 3].where = {
      author_id: authorId,
    };

    return request;
  },
};

const swapController = {
  /**
   * POST /v1/swaps
   *
   * @summary Get swap proposition
   * @tags swap
   *
   * @param {SwapBody} request.body - status and date of a swap
   *
   * @return {swap} 201 - success response - application/json
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 201 - status and date created of a swap
   * {
   *    "status": 0,
   *    "date": "2021-03-21T15:49:31.39882+00:00"
   * }
   *
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  swapProposal: async (request, response) => {
    const swapToSave = request.body;
    swapToSave.date = Date.now();
    swapToSave.status = 0;

    try {
      const swap = await Swap.create(swapToSave);
      response.status(201).json(swap);
    } catch (error) {
      response.status(500).json({ error: 500, message: error });
    }
  },

  /**
   * GET /v1/swaps/authorAsker/{swapId}
   *
   * @summary make a swap proposal (Asker)
   * @tags swap
   *
   * @param {number} swapId.path - id exchange
   *
   * @return {SwapDto} 200 - success response - application/json
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 200 - status and date created of proposition a swap
   * {
   *   "id": 13,
   *   "status": 0,
   *   "date": "2021-04-02T16:47:40.510Z",
   *   "mealOffer": {
   *     "id": 6,
   *     "name": "Risotto aux fruits de mer",
   *     "asker": {
   *       "id": 2,
   *       "username": "Anne",
   *       "email": "anne@mail.fr"
   *     }
   *   },
   *   "mealRequest": {
   *     "id": 4,
   *     "name": "Gyoza au porc",
   *     "receiver": {
   *       "id": 1,
   *       "username": "marie",
   *       "email": "marie@mail.fr"
   *     }
   *   }
   * }
   *
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  getSwapAsker: async (request, response) => {
    try {
      const sequelizeRequest = swapService.buildRequest(
        request.params.id,
        'mealOffer',
      );
      const swapOffer = await Swap.findAll(sequelizeRequest);
      response.status(200).json(swapOffer);
    } catch (err) {
      response.status(500).json({ error: 500, message: err });
    }
  },

  /**
   * GET /v1/swaps/authorReceiver/{swapId}
   *
   * @summary exchange proposal received (receiver)
   * @tags swap
   *
   * @param {number} swapId.path - id exchange
   *
   * @return {SwapDto} 200 - success response - application/json
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 200 - status and date of proposition a swap
   * {
   *   "id": 13,
   *   "status": 0,
   *   "date": "2021-04-02T16:47:40.510Z",
   *   "mealRequest": {
   *     "id": 4,
   *     "name": "Gyoza au porc",
   *     "receiver": {
   *       "id": 1,
   *       "username": "marie",
   *       "email": "marie@mail.fr"
   *     }
   *   },
   *   "mealOffer": {
   *     "id": 6,
   *     "name": "Risotto aux fruits de mer",
   *     "asker": {
   *       "id": 2,
   *       "username": "Anne",
   *       "email": "anne@mail.fr"
   *     }
   *   }
   * }
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  getSwapReceiver: async (request, response) => {
    try {
      const sequelizeRequest = swapService.buildRequest(
        request.params.id,
        'mealRequest',
      );
      const swapRequest = await Swap.findAll(sequelizeRequest);
      response.status(200).json(swapRequest);
    } catch (err) {
      response.status(500).json({ error: 500, message: err });
    }
  },

  /**
   * PUT /v1/swaps/{swapId}
   *
   * @summary Update swap proposition
   * @tags swap
   *
   * @param {number} swapId.path - id of a swap
   *
   * @return {SwapDto} 200 - success response - application/json
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 200 - Swap update to accepted
   * {
   *   "id": 13,
   *   "status": 1,
   *   "date": "2021-04-02T16:47:40.510Z",
   *   "mealRequest": {
   *     "id": 4,
   *     "name": "Gyoza au porc",
   *     "receiver": {
   *       "id": 1,
   *       "username": "marie",
   *       "email": "marie@mail.fr"
   *     }
   *   },
   *   "mealOffer": {
   *     "id": 6,
   *     "name": "Risotto aux fruits de mer",
   *     "asker": {
   *       "id": 2,
   *       "username": "Anne",
   *       "email": "anne@mail.fr"
   *     }
   *   }
   * }
   *
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  updateSwap: async (request, response, next) => {
    const id = Number(request.params.id);
    const data = request.body;
    try {
      const swap = await Swap.findByPk(id);

      if (!swap) {
        next();
      }

      Object
        .keys(data)
        .forEach((field) => {
          if (swap[field]) {
            swap[field] = data[field];
          }
        });

      await swap.save();
      response.status(200).json(swap);
    } catch (error) {
      response.status(500).json({ error: 500, message: error });
    }
  },
};

module.exports = swapController;
