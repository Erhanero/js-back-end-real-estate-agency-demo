const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["Apartment", "Villa", "House"],
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,

    },
    homeImage: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    availablePieces: {
        type: Number,
        required: true,
    }
});

const House = mongoose.model("House", houseSchema);

module.exports = House;