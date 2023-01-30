
const mongoose = require("mongoose");

const mmGameSchema = new mongoose.Schema(
    {

        Name: {
            type: String,
            unique: true,
            required: true
        },
        Year: {
            type: String,
            unique: false,
            required: false
        },
        Story: {
            type: String,
            unique: true,
            required: false
        },

        Bosses: [{
            type: String
        }]
    }
)

const mmGameModel = mongoose.model("mmGame", mmGameSchema);

module.exports = mmGameModel;