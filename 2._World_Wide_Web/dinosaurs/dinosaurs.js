const { coolDinosaur } = require("./dinosaurs.json");


function amountOfCoolDinosaurs() {
    return coolDinosaur.length;
}


module.exports = {
    calculateAmountOfCoolDinosaurs: amountOfCoolDinosaurs
}
