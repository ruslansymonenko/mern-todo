const {Router} = require('express');
const router = Router();
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

router.post('/', 
  [
    check('email', 'Email is not correct!').isEmail(),
    check('password', 'Password is to short').isLength({min: 6})
  ]
  ,async (req, res) => {
    try {
      const errors = validationResult(req);

      if(!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Your data is not correct!'
        })
      }

      const {email, password} = req.body;

      const isUsed = await User.findOne({email});

      if (isUsed) {
        res.status(409).json({message: 'This email is already registered'})
      };

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({email, password: hashedPassword});

      await user.save();

      res.status(201).json({message: 'User successfully registered'})

    } catch (err) {
      console.log(err);
    }
});

module.exports = router;