


const express = require("express");
const router = express.Router();

const {

    renderIndex,

    renderAllmmBoss,
    renderOnemmBoss,
    renderCreatemmBossForm,
    renderUpdatemmBossForm,

    renderAllmmGame,
    renderOnemmGame,
    renderCreatemmGameForm,
    renderUpdatemmGameForm,

    renderCreatemmUserForm,
    renderLoginmmUserForm,
    
} = require("../../controllers/view/viewController");

router.get("/", (req, res) => {
    res.render("loginmmUser");
});


router.get("/index", renderIndex);
router.get("/createmmUser", renderCreatemmUserForm);
router.get("/loginmmUser", renderLoginmmUserForm);



router.get("/allmmBoss", renderAllmmBoss);
router.get("/onemmBoss/:Name", renderOnemmBoss);
router.get("/createOnemmBoss", renderCreatemmBossForm);
router.get("/updatemmBoss/:Name", renderUpdatemmBossForm);

router.get("/allmmGame", renderAllmmGame);
router.get("/onemmGame/:Name", renderOnemmGame);
router.get("/createmmGame", renderCreatemmGameForm);
router.get("/updatemmGame/:Name", renderUpdatemmGameForm);


module.exports = router;