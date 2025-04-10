import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import pokemonRoutes from "./routes/pokemon.routes.js";

dotenv.config();
const app = express();
const PORT = (process.env.PORT || 3000);

app.set("port", PORT);

app.use(express.json())
app.use("/api/pokemon", pokemonRoutes);

app.get("/",(req, res)=>{
    console.log("Hola entrenador");
    res.send("Hola entrenador")
});

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connect to db"))
.catch((error)=>console.log(error))

app.listen(PORT, ()=>{
    console.log(`Listening in port ${PORT}`);
});