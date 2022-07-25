const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
      },
      calorieRequirement : {
        type : Number,
        default: 0,
      },
      meal : {
        date : {
            type : Date,
        },
        meals: {
            type : Array,
            default : []
        }
      },
  }
);

module.exports = mongoose.model("User", UserSchema);