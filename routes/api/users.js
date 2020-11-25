const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require('config');
const jwt = require('jsonwebtoken');

// user model
const User = require('../../models/User');

module.exports = router;

// @route GET api/users @desc Get All Users @access Public

router.get('/', (req, res) => {
  User
    .find()
    .sort({date: -1})
    .then(users => res.json(users))
});

// @route GET api/users @desc Post To Users @access Public

router.post('/', (req, res) => {
  const {name, email, password} = req.body;

  // form validation
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({msg: 'Please enter all required fields'});
  }

  // check for existing user
  User
    .findOne({email})
    .then(user => {
      if (user) 
        return res.status(400).json({msg: 'User already exists!'})
      const newUser = new User({name, email, password});

      // create salt and hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) 
            throw(err);
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              jwt.sign(
                { id: user.id }, 
                config.get('jwtSecret'), 
                { expiresIn: 3600 }, 
                (err, token) => {
                if(err) throw(err);
                res.json({
                  token,
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                  }
                })
              })
            })
        })
      })
    });
  });
  // @route DELETE api/users:id @desc Delete An User @access Public

  router.delete('/:id', (req, res) => {
    User
      .findById(req.params.id)
      .then(user => user.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
  });

  module.exports = router;