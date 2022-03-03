const { calculateAmountOfCoolDinosaurs } = require("../dinosaurs/dinosaurs");

const router = require("express").Router();

router.get('/calculatecooldinosaurs', (req, res) => {
    res.send({data: calculateAmountOfCoolDinosaurs()});
});


router.get("/amountofcooldinosaurs", (req, res) => {
    res.redirect("calculatecooldinosaurs");
});

// 
router.get("/coolestdinosaur", (req, res) => {
    if (req.query.cool === "Yes") {
        return res.send({ dinosaur: "Charizard"});
    } 
        res.send({ dinosaur: "T-rex"});
});

module.exports = { 
    router: router
};