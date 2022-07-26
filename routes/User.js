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



module.exports = router;