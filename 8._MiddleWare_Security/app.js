import express from "express"
import helmet from "helmet" // for security. adds security

const app = express();

//################## session.
import session from "express-session";

app.use(session({
    secret: 'keyboard cat should not be pushed',
    resave: false, // variable. if its true every route will try to resave the session. false = if you are not updating dont try to resave it. 
    saveUninitialized: true, // means that even if you are not starting a session when a client contacts / makes a request. you want to create a session.
    // false means if we dont want to create that many sessions????
    cookie: { secure: false } // you have to make it false. true is https. we are doing http
  }));

//Authentication who you are
//Authorization restricting access

import rateLimit from 'express-rate-limit'

const baseLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 5 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const authLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 5 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});


app.use(baseLimiter); // ddos prevention
app.use("/auth", authLimiter); 


app.get("/auth/login", (req, res) => {
    res.send({ message: "You are trying to login..."});
});


app.use(helmet());
app.use(express.static("public")); // middleware
// router is also middleware. lavede vi i 2._World-Wide_web


/*app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/clothes.html")
});*/

import planetsRouter from "./routers/planets.js";
app.use(planetsRouter);


app.use("/auth/*", ipLogger); // targets only auth login - sign up etc etc.

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

app.get("/frontgate",  (req,res) => {
    res.send({});
});

let isHatchOpen = true; // false blocks our else message. // true makes it so you can update req = Jimmy f.eks (Middleware)

function allowEscape(req, res, next) {
    if (isHatchOpen) {
       console.log("Go on"); 
       req.escapee ="Jimmy";
        next();
    } else {
        res.send({ message: "YOU SHALL NOT PASS"})
    }
   
}

app.get("/escapehatch", allowEscape, (req, res) => { 
    res.send({ message: `Congrats ${req.escapee}, you have managed to escape!`});
});


app.get("/room", (req, res, next) => { // next tells us to match with the next available route.
    console.log("You are in room 1"); // going into room one first bit I get room 2 response
    next();
});

app.get("/room", (req, res) => {
    res.send({ data: "You are in room 2"});
});

app.get("*", (req, res) => {
    res.send("<h1> Not found 404 </h1>");
});


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => { 
    console.log("The server is running on port", PORT);
});