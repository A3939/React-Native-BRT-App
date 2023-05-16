const mongoose = require("mongoose");

const busSchema = mongoose.Schema(
  {
    busNo: {
      type: String,
      require: [true, "Please provide bus number"],
    },
    start_station: {
      type: String,
      require: [true, "Please provide starting station"],
    },
    end_station: {
      type: String,
      require: [true, "Please provide ending station"],
    },
    route: {
      type: Array,
      require: [true, "Please provide route of bus"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bus", busSchema);
