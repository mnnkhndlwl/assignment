const mongoose = require("mongoose");

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
      fooditems : {  // will store food items id here
        type : Array,
        default : [],
      }
  }
);

module.exports = mongoose.model("Meal", MealSchema);