
const mongoose = require("mongoose");

const mmUserSchema = new mongoose.Schema(
    {

        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            unique: false,
            required: true
        },
        
        favorites: [{
            type: String,
            unique: false,
            required: false
        }]
    }
)

const mmUserModel = mongoose.model("mmUser", mmUserSchema);

module.exports = mmUserModel;