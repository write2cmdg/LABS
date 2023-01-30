const mmGame = require("../../models/mmGameModel");

async function getAllmmGame(req, res) {
    try {
        let result = await mmGame.find({})

        res.json({
            message: "success",
            payload: result
        });
    } catch (err) {
        console.log(`getAllmmGame error: ${err}`)

        res.json({
            message: "failure",
            payload: err
        });
    }
}

async function getOnemmGame(req, res) {
    try {
        let result = await mmGame.find({ Name: req.params.Name });

        res.json({
            message: "success",
            payload: result
        })
    } catch (error) {
        console.log(`getOnemmGame error: ${error}`);

        res.json({
            message: "failure",
            payload: error
        })
    }
}

async function createOnemmGame(req, res) {
    try {
        let newmmGame = {
            Name: req.body.Name,
            Year: req.body.Year,
            Story: req.body.Story,
            Bosses: req.body.Bosses.split(", ")

        }

        await mmGame.create(newmmGame);



        res.redirect(`/allmmGame`);
    } catch (error) {
        console.log(`createOnemmGame error: ${error}`);

        res.json({
            message: "failure",
            payload: `createOnemmGame error: ${error}`
        });
    }
}

async function deleteOnemmGame(req, res) {
    try {
        let deleteTarget = req.params.Name

        await mmGame.deleteOne({ Name: deleteTarget });

    

        res.redirect("/allmmGame");
    } catch (error) {
        console.log(`deleteOnemmGame error: ${error}`);

        res.json({
            message: "failure",
            payload: `deleteOnemmGame error: ${error}`
        });
    }
}

async function updateOnemmGame(req, res) {
    try {

        let updatedmmGame = {
            Name: req.body.Name,
            Year: req.body.Year,
            Story: req.body.Story,
            Bosses: req.body.Bosses.split(", ")
        }

        await mmGame.updateOne(
            {Name: req.params.Name},
            {$set: updatedmmGame},
            {upsert: true}
        )


        res.redirect(`/onemmGame/${updatedmmGame.Name}`)

    } catch (error) {
        console.log(`upDateOnemmGame error: ${error}`);
        res.json({
            message: "failure",
            payload: `updatedOnemmGame error ${error}`
        })

    }
}

module.exports = {
    getAllmmGame,
    getOnemmGame,
    createOnemmGame,
    deleteOnemmGame,
    updateOnemmGame
}