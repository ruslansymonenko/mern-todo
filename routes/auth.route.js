const {Router} = require('express');
const router = Router();

const User = require('../models/User');

router.post('/', async (req, res) => {
    try {
      const {email, password} = req.body;

      const isUsed = await User.findOne({email});

      if (isUsed) {
        res.status(409).json({message: 'This email is already registered'})
      };

      const user = new User({email, password});

      await user.save();

      res.status(201).json({message: 'User successfully registered'})

    } catch (err) {
      console.log(err);
    }
});

module.exports = router;