import {Router} from "express";
const router = Router();

router.get("/spinplanet", (req, res) => {
    req.session.planetName = "Jupiter"; // could be is logged in?
    const wasSpinning = req.session.isSpinning;
    req.session.isSpinning = true;
    res.send({ message: `Planet was spinning: ${wasSpinning}.`});
});

// for logout we could use:
//req.session.destroy(function(err) {
// cannot access here
//});

router.get("/stopplanet", (req, res) => {
    console.log(req.session.planetName); // writes out Jupiter
    const wasSpinning = req.session.isSpinning;
    req.session.isSpinning = false;
    res.send({ message: `Planet was spinning: ${wasSpinning}.`});
});


export default router;
