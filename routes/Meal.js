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

//UPDATE Meal
router.patch("/:id", async (req, res) => {   
        try {
          const updatedMeal = await Meal.findByIdAndUpdate(
            req.params.id,
              req.body,
            { new: true }
          );
          res.status(200).json(updatedMeal);
        } catch (err) {
          res.status(500).json(err);
          console.log(err);
        }
  });

module.exports = router;