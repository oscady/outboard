const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  //check for token
  if(!token) {
    return res.status(401).json({ msg: 'ur missing a token, cannae come in soz'})
  }

  try {
    // verify token
  const decoded = jwt.verify(token, config.get('jwtSecret'));
  // Add user 
  req.user = decoded;
  next();
  } catch(e) {
    res.status(400).json({ msg: 'token invalid'})
  }
  
}

module.exports = auth