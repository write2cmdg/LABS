

const express = require("express");
const router = express.Router();
const {
    createmmUser,
    loginmmUser,

} = require("../../controllers/api/mmUserController");

router.post("/createmmUser", createmmUser);

router.post("/loginmmUser", loginmmUser);



module.exports = router;
