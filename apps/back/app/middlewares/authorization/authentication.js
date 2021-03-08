const jwt = require('jsonwebtoken');

const authenticateJWT = (request, response, next) => {
    const authHeader = request.headers.authorization;
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return response.sendStatus(403);
            }

            request.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = authenticateJWT;