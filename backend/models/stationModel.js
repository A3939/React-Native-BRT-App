const mongoose = require("mongoose");

const stationSchema = mongoose.Schema(
  {
    stationName: {
      type: String,
      required: [true, "Please provide bus number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Station", stationSchema);
