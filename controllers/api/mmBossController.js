const mmBoss = require("../../models/mmBossModel");

async function getAllmmBoss(req, res) {
    try {
        let result = await mmBoss.find({})

        res.json({
            message: "success",
            payload: result
        });
    } catch (err) {
        console.log(`getAllmmBoss error: ${err}`)

        res.json({
            message: "failure",
            payload: err
        });
    }
}

async function getOnemmBoss(req, res) {
    try {
        let result = await mmBoss.find({Name: req.params.Name });

        res.json({
            message: "success",
            payload: result
        })
    } catch (error) {

        res.json({
            message: "failure this failure",
            payload: error
        })
    }
}

async function createOnemmBoss(req, res) {
    try {
        let newmmBoss = {
            Name: req.body.Name,
            HP: req.body.HP,
            Weapon: req.body.Weapon,
            Attack: req.body.Attack,
            Weakness: req.body.Weakness,
            Game: req.body.Game

        }

        await mmBoss.create(newmmBoss);



        res.redirect(`/onemmboss/${newmmBoss.Name}`)
    } catch (error) {
        console.log(`createOnemmBoss error: ${error}`);

        res.json({
            message: "failure",
            payload: `createOnemmBoss error: ${error}`
        });
    }
}

async function deleteOnemmBoss(req, res) {
    try {
        let deleteTarget = req.params.Name

        await mmBoss.deleteOne({ Name: deleteTarget });

    

        res.redirect("/");
    } catch (error) {
        console.log(`deleteOnemmBoss error: ${error}`);

        res.json({
            message: "failure",
            payload: `deleteOnemmBoss error: ${error}`
        });
    }
}

async function updateOnemmBoss(req, res) {
    try {

        let updatedmmBoss = {
            Name: req.body.Name,
            HP: req.body.HP,
            Weapon: req.body.Weapon,
            Attack: req.body.Attack,
            Weakness: req.body.Weakness,
            Game: req.body.Game
        }

        await mmBoss.updateOne(
            {Name: req.params.Name},
            {$set: updatedmmBoss},
            {upsert: true}
        )


        res.redirect(`/onemmboss/${updatedmmBoss.Name}`)

    } catch (error) {
        console.log(`upDateOnemmBoss error: ${error}`);
        res.json({
            message: "failure",
            payload: `updatedOnemmBoss error ${error}`
        })

    }
}

module.exports = {
    getAllmmBoss,
    getOnemmBoss,
    createOnemmBoss,
    deleteOnemmBoss,
    updateOnemmBoss
}