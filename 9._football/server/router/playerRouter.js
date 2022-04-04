import {Router} from "express";
const playerRouter = Router();
import db from "../database/createConnection.js"



playerRouter.get("/api/players", async (req, res) => {
    const players = await db.all("SELECT * FROM players;");
    
    res.send({ data: players });
});

playerRouter.post("/api/players", async (req, res) => {
    const { name } = req.body;

    const {changes} = await db.run(`INSERT INTO players (name) VALUES (?);`, [name]);
    res.send({ rowsAffected: changes });
})

export default playerRouter;