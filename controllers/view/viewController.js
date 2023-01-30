

const mmGame = require("../../models/mmGameModel");
const mmBoss = require("../../models/mmBossModel");
const mmUser = require("../../models/mmUserModel");



async function renderAllmmGame(req, res) {
    try {
        let result = await mmGame.find({});

        res.render("allmmGame", { mmGame: result })
    } catch (error) {
        console.log(`renderAllmmGame error: ${error}`);
    }
}

async function renderAllmmBoss(req, res) {
    try {
        let result = await mmBoss.find({});

        res.render("allmmBoss", { mmBoss: result })
    } catch (error) {
        console.log(`renderAllmmBoss error: ${error}`);
    }
}



async function renderOnemmGame(req, res) {
    try {

        let result = await mmGame.find({ Name: req.params.Name });
        res.render("onemmGame", { mmGame: result[0] });

    } catch (error) {
        console.log(`renderOnemmGame error: ${error}`);
    }
}

async function renderOnemmBoss(req, res) {
    try {

        let result = await mmBoss.find({ Name: req.params.Name });

        res.render("onemmBoss", { mmBoss: result[0] });
    } catch (error) {
        console.log(`renderOnemmBoss error: ${error}`);
    }
}



async function renderCreatemmGameForm(req, res) {
    try {
        res.render("createmmGame");
    } catch (error) {
        console.log(`renderCreatemmGameForm error: ${error}`);
    }
}

async function renderCreatemmBossForm(req, res) {
    try {
        res.render("createmmBoss");
    } catch (error) {
        console.log(`renderCreatemmBossForm error: ${error}`);
    }
}

async function renderCreatemmUserForm(req, res) {
    try {
        res.render("createmmUser");
    } catch (error) {
        console.log(`renderCreatemmUserForm error: ${error}`);
    }
}



async function renderUpdatemmGameForm(req, res) {
    try {
        let result = await mmGame.find({ Name: req.params.Name });
        res.render("updatemmGame", {mmGame: result[0]});
    } catch (error) {
        console.log(`renderUpdatemmGameForm error ${error}`)
    }

}

async function renderUpdatemmBossForm(req, res) {
    try {
        let result = await mmBoss.find({ Name: req.params.Name });
        res.render("updatemmBoss", {mmBoss: result[0]});
    } catch (error) {
        console.log(`renderUpdatemmBossForm error ${error}`)
    }

}


async function renderIndex(req, res) {
    try {
        res.render("Index");
    } catch (error) {
        console.log(`renderIndex error: ${error}`);
    }
}

async function renderLoginmmUserForm(req, res) {
    try {
        res.render("loginmmUser");
    } catch (error) {
        console.log(`renderIndex error: ${error}`);
    }
}



module.exports = {

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
    renderIndex,
}