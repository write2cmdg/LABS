
const mongoose = require("mongoose");

const mmBossSchema = new mongoose.Schema(

    {

        Name: {
            type: String,
            unique: true,
            required: true
        },
        HP: {
            type: String,
            unique: false,
            required: true
        },
        Weapon: {
            type: String,
            unique: false,
            required: true
        },
        Attack: {
            type: String,
            unique: false,
            required: true
        },
        Weakness: {
            type: String,
            unique: false,
            required: true
        },
        Game: {
            type: String,
            unique: false,
            required: true
        },
    }
)

const mmBossModel = mongoose.model("mmBoss", mmBossSchema);

module.exports = mmBossModel;