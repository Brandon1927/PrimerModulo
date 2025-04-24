import express from "express";
import pokemonControllers from "../controllers/pokemon.controller.js"; 
import pokemonStatus from "../controllers/pokemonStatus.controller.js"; 

const router = express.Router();

router.get("/hello", pokemonControllers.hiTrainer);
router.post("/", pokemonControllers.createPokemon);
router.get("/", pokemonControllers.getPokemons);
router.get("/:pokemon_id", pokemonControllers.getPokemonById);
router.put("/catch/:pokemon_id", pokemonStatus.catchViewPokemonById);
router.post("/view", pokemonStatus.changeStatusViewPokemon);
// router.delete("/bye", pokemonController.delPokemon);

export default router;