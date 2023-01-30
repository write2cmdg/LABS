const express = require("express");
const router = express.Router();

const {
    getAllmmBoss,
    getOnemmBoss,
    createOnemmBoss,
    deleteOnemmBoss,
    updateOnemmBoss
} = require("../../controllers/api/mmBossController");

router.get("/allmmBoss", getAllmmBoss);
router.get("/onemmBoss/:Name", getOnemmBoss);
router.post("/createonemmBoss", createOnemmBoss);
router.put("/updateOnemmBoss/:Name", updateOnemmBoss);
router.delete("/deleteOnemmBoss/:Name", deleteOnemmBoss);

module.exports = router