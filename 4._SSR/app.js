const express = require("express"); // library
const app = express(); // instance

app.use(express.static("public")); 

const fs = require("fs"); // filesystem

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const themepark = fs.readFileSync("./public/pages/themepark/themepark.html").toString();

const frontpagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "The THeme Park") + frontpage + footer;
const themeparkPage = nav.replace("%%TITLE_PLACEHOLDER%%", "ROLLERCOASTER HEJ") + themepark + footer;

app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/themepark", (req, res) => {
    res.send(themeparkPage)
});


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => { 
    console.log("The server is running on port", PORT);
});