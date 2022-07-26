const router = require("express").Router();
const User = require('../models/UserModel');

router.post('/add_user', async (req, res) => {
    const newUser = new User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//UPDATE MealPlan
router.patch("/:id", async (req, res) => {   
    try {
      const updated = await User.findByIdAndUpdate(
        req.params.id,
          req.body,
        { new: true }
      );
      res.status(200).json(updated);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
});


module.exports = router;