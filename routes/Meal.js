const router = require("express").Router();
const Meal = require('../models/MealModel');

router.post('/add_meal', async (req, res) => {
    const newMeal = new Meal(req.body);
    try {
        const savedFood = await newMeal.save();
        res.status(200).json(savedFood);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;