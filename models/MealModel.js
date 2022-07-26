const mongoose = require("mongoose");
const foodItem = require('../models/FoodItemModel');

const MealSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
      },
      category : {
        type: [String],
        enum: ['Breakfast', 'Lunch', 'Evening Snack','Dinner'],
      },
      fooditems : [{  // will store food items id here
        type: mongoose.Schema.Types.ObjectId, ref: 'foodItem'
      }]
  }
);

module.exports = mongoose.model("Meal", MealSchema);