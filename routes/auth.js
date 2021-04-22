const express = require("express");
const {check} = require("express-validator");

const routes = express.Router();

const {signout, signup, signin, isSignedIn} = require("../controllers/auth")

routes.post("/signup",[
    check("name","Name should not be empty").isLength({min:1}),
    check("email","email is required").isEmail(),
    check("password","password should be at least 5 char").isLength({min:5})
],signup);

routes.post("/signin",[
    check("email","email is required").isEmail(),
    check("password","password should be at least 5 char").isLength({min:5})
],signin);

routes.get("/signout",signout);

routes.get("/testroute",isSignedIn,(req,res)=>{
    res.json(req.auth);
})

module.exports = routes;