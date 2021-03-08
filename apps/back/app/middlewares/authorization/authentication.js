const jwt = require('jsonwebtoken');

const authenticateJWT = (request, response, next) => {
    const authHeader = request.headers.authorization;
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, author) => {
            if (err) {
                return response.sendStatus(403);
            }

            request.author = author;
            next();
        });
    } else {
        response.sendStatus(401);
    }
};

module.exports = authenticateJWT;