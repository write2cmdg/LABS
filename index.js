


const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require('cookie-parser');
const logger = require("morgan");
const methodOverride = require('method-override');
const connectToMongoDB = require("./database/mongodb");
const session = require('express-session');
const seshLength = 1000 * 60 * 60 * 2;



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use('/public/images/', express.static("./public/images"));
app.use('/public/css/', express.static("./public/css"));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    saveUninitialized: true,
    cookie: { maxAge: seshLength }, 
    resave: false
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
})



const mmBossRouter = require("./routes/api/mmBossRouter");
app.use("/api", mmBossRouter);

const mmGameRouter = require("./routes/api/mmGameRouter");
app.use("/api", mmGameRouter);

const mmUserRouter = require("./routes/api/mmUserRouter");
app.use("/api", mmUserRouter);

const viewsRouter = require("./routes/viewRouters/viewRouter");
app.use("/", viewsRouter);



const PORT = 3030;

app.listen(PORT, () => {

    console.log(`server listening on ${PORT}`);
    connectToMongoDB()

});