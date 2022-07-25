const router = require("express").Router();
const foodItem = require('../models/FoodItemModel');

router.post('/add_food', async (req, res) => {
    const newFoodItem = new foodItem(req.body);
    try {
        const savedFood = await newFoodItem.save();
        res.status(200).json(savedFood);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;