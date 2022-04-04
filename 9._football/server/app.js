import express from "express";
const app = express();

app.use(express.json());

// import cors from "cors"; // husk at have den over alle andre import routes.
// app.use(cors()); // gør at vi kan køre frontend og backend på samme locahost

import path from "path";
app.use(express.static(path.resolve("../client/public"))); // den her server min svelte.

import playerRouter from "./router/playerRouter.js";
app.use(playerRouter);





const PORT = process.env.PORT || 9000;
app.listen(PORT, () => { 
    console.log("The server is running on port", PORT);
});