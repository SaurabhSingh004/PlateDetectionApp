const mongoose = require("mongoose");

const PlateInfoSchema = new mongoose.Schema(
  {
    platenumber: {
      type: String,
      require: true,
      min: 2,
      max: 20,
      unique: true,
    }
  },
  {
  timestamps: true
  }
);

module.exports = mongoose.model("PlateInfo", PlateInfoSchema);