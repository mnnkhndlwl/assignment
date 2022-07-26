const mongoose = require("mongoose");
const Meal = require('../models/MealModel');

const UserSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
      },
      calorieRequirement : {
        type : Number,
        default : 0,
      },
      meal : {
        date : {
            type : Date,
        },
        MealPlan : [{  // will store food items id here
          type: mongoose.Schema.Types.ObjectId, ref: 'Meal'
        }]
      },
  }
);

module.exports = mongoose.model("User", UserSchema);