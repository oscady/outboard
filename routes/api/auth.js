const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')

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

// @route POST api/auth @desc Auth user @access Public

router.post('/', (req, res) => {
  const {email, password} = req.body;

  // form validation
  if (!email || !password) {
    return res
      .status(400)
      .json({msg: 'Please enter all required fields'});
  }

  // check for existing user
  User
    .findOne({email})
    .then(user => {
      if (!user) 
        return res.status(400).json({msg: 'User does not exist!'})

     // validate password
     bcrypt.compare(password, user.password).then(isMatch => {
       if(!isMatch) return res.status(400).json({ msg: 'invalid credentials!!'});
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
    });
  });
  // @route DELETE api/users:id @desc Delete An User @access Public

  router.delete('/:id', (req, res) => {
    User
      .findById(req.params.id)
      .then(user => user.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
  });

  // @route Get api/auth/user @desc GET user data @access Private
  router.get('/user', (req, res) => {
    User.findById(req.user.id).select('-password').then(user => res.json(user))
  })

  module.exports = router;
