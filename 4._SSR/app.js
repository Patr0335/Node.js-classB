const express = require("express"); // library
const app = express(); // instance
const data = require("./fetchExample/template.json");

app.use(express.static("public")); // to serve static files such as images, css & js.

const fs = require("fs"); // filesystem

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();


const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const introExPage = fs.readFileSync("./public/pages/introExPage/introExPage.html").toString();
const terminalCommands = fs.readFileSync("./public/pages/terminalCommands/terminalCommands.html").toString();
const restAPI = fs.readFileSync("./public/pages/restAPI/restAPI.html").toString();
const servingHTML = fs.readFileSync("./public/pages/servingHTML/servingHTML.html").toString();
const SSR = fs.readFileSync("./public/pages/SSR/SSR.html").toString();
const expressNotes = fs.readFileSync("./public/pages/expressNotes/expressNotes.html").toString();

const frontpagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Overview") + frontpage + footer ;
const introExPagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "introExPage") + introExPage + footer;
const terminalCommandsPage = nav.replace("%%TITLE_PLACEHOLDER%%", "terminalCommands") + terminalCommands + footer;
const restAPIPage = nav.replace("%%TITLE_PLACEHOLDER%%", "restAPI") + restAPI + footer;
const servingHTMLPage = nav.replace("%%TITLE_PLACEHOLDER%%", "Nodemon & fetch") + servingHTML + footer;
const SSRPage = nav.replace("%%TITLE_PLACEHOLDER%%", "SSR") + SSR + footer;
const expressNotesPage = nav.replace("%%TITLE_PLACEHOLDER%%", "Express") + expressNotes + footer;

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/json", (req, res) => {
    res.json(data);
})

app.get("/introExPage", (req, res) => {
    res.send(introExPagePage)
});

app.get("/terminalCommands", (req, res) => {
    res.send(terminalCommandsPage)
});

app.get("/restAPI", (req, res) => {
    res.send(restAPIPage)
});

app.get("/servingHTML", (req, res) => {
    res.send(servingHTMLPage)
});

app.get("/SSR", (req, res) => {
    res.send(SSRPage)
});

app.get("/expressNotes", (req, res) => {
    res.send(expressNotesPage)
});


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => { 
    console.log("The server is running on port", PORT);
});