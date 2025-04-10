import express from "express";
import pokemonControllers from "../controllers/pokemon.controller.js"; 

const router = express.Router();

router.get("/hello", pokemonControllers.hiTrainer);

router.post("/hi", pokemonControllers.createPokemon);

router.delete("/bye", pokemonControllers.delPokemon);

router.put("/update", pokemonControllers.actPokemon);

export default router;