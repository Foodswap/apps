const jwt = require('jsonwebtoken');

const authenticateJWT = (request, response, next) => {
  const authHeader = request.headers.authorization;
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, accessTokenSecret, (err, author) => {
      if (err) {
        return response.status(403).json({ message: 'Forbidden' });
      }

      request.author = author;
      next();
    });
  } else {
    response.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authenticateJWT;
