const mmUser = require("../../models/mmUserModel");
const bcrypt = require("bcrypt");



async function createmmUser(req, res) {
    try {
        let {email, password} = req.body;
        let salt = await bcrypt.genSalt(10);

        let encryptedPassword = await bcrypt.hash(password, salt);

        let newUserObj = {
            email: email,
            password: encryptedPassword,
            favorites: []
        }

        await mmUser.create(newUserObj);

        res.redirect("/");

    }catch (err) {
        console.log(`createUser error: ${err}`)

        res.json({
            message: "failure",
            payload: `createUser error ${err}`
        })
    }
}


async function loginmmUser(req, res) {
    try {
        const User = await mmUser.findOne({ email: req.body.email });
        if (!User) {
            throw "Error: User not found"
        } else {
            let comparedPassword = await bcrypt.compare(
                req.body.password,
                User.password
            );

            if (!comparedPassword) {
                throw "Error: Incorrect Password"
            } else {
                req.session.isAuth = true;
                let userObj = {
                    email: mmUser.email,
                    password: mmUser.password
                }

                req.session.user = userObj;

                res.redirect("/")

            }
        }
    } catch (error) {
        console.log(`error ${error}`)
        res.json({
            message: "Faiure",
            payload: `logInUser error ${error}`
        })
    }
}





module.exports = {
 
    createmmUser,
    loginmmUser

}