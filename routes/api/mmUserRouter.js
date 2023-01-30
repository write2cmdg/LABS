// const express = require("express");
// const router = express.Router();
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const schemas = require('../../models/mmUserModel');
// const createmmUser = require("../../controllers/api/mmUserController");
// // const { schema } = require("../../models/mmUserModel");


// // router.get("/createmmUser", createmmUser);


// router.post('/createmmUser', async (req, res) => {
//     let email = req.body.email;
//     let password = req.body.password;

//     if (email!= "" && password != "") {
//         let users = schemas.mmUserSchema;
//         // const User = mongoose.model('User', mmuserSchema);

//         let qry = {email:email};
//         let userSearch = await users.findOne(qry).then( async(data) => {
//             if (!data) {
//                 let saltRounds = 10;
//                 let passSalt = await bcrypt.genSalt(saltRounds, async(err, salt) => {
//                     let passHash = await bcrypt.hash(password, salt, async(err, hash) => {
//                         let acct = {email:email, password:hash, level:'admin'};
//                         let newUser = new schema.mmUserSchema(acct);
//                         let saveUser = newUser.save();
//                     })
//                 })
//             }
//         })
//         res.render('loginmmUser', { loggedIn:false } )
//     } else {
//         res.render('createmmUser', {loggedIn:false })
//     }
// })




// module.exports = router


const express = require("express");
const router = express.Router();
const {
    createmmUser,
    loginmmUser,

} = require("../../controllers/api/mmUserController");

router.post("/createUser", createmmUser);

router.post("/logInUser", loginmmUser);



module.exports = router;
