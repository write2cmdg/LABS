const express = require("express");
const router = express.Router();

const {
    getAllmmGame,
    getOnemmGame,
    createOnemmGame,
    deleteOnemmGame,
    updateOnemmGame
} = require("../../controllers/api/mmGameController");

router.get("/allmmGame", getAllmmGame);
router.get("/onemmGame/:Name", getOnemmGame);
router.post("/createOnemmGame", createOnemmGame);
router.put("/updateOnemmGame/:Name", updateOnemmGame);
router.delete("/deleteOnemmGame/:Name", deleteOnemmGame);

module.exports = router