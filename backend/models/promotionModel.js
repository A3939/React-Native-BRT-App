const mongoose = require("mongoose");

const advertisementSchema = mongoose.Schema(
    {
        advertisement: {
            type: String,
            required: [true, "Please provide name"],
        },
        advertisementImage:{
            type: String,
            required: [true, "Please provide image link"],
        },
        advertisementLink: {
            type: String,
            required: [true, "Please provide link"],
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Promotion", advertisementSchema);
