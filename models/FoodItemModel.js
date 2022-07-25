const mongoose = require("mongoose");

const FoodItemSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
      },
      calories : {
        type : Number,
        default : 0,
      },
      protein : {
        type : Number,
        default : 0,
      },
      carbs : {
        type : Number,
        default : 0,
      },
      fat : {
        type : Number,
        default : 0,
      },
      acceptedUnits : {
        type: [String],
        enum: ['ml', 'litre', 'kg','g'],
      },
      itemWeight : {
        type : Number,
        default : 0,
      }
  }
);

module.exports = mongoose.model("FoodItem", FoodItemSchema);