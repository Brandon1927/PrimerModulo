import Pokemon from "../models/pokemon.model.js";

const hiTrainer = async (req, res)=>{
    try {
        res.status(200).send("Hola desde el controlador");
    } catch (error) {
        res.status(500).json(`el error es: ${error.message}`);
    }
};

const createPokemon = async (req, res)=>{
    try {
        const pokemon = new Pokemon(req.body);
        await pokemon.save();
        return res.status(201).json(pokemon);
    } catch (error) {
        res.status(500).send(`el error es: ${error.message}`);
    }
}

const delPokemon = async (req, res)=>{
    try {
        res.status(200).send("Borraste un pokemon");
    } catch (error) {
        res.status(404).json(`el error es: ${error.message}`);
    }
}

const actPokemon = async (req, res)=>{
    try {
        res.status(201).send("Actualizaste un pokemon");
    } catch (error) {
        res.status(404).json(`El error es: ${error.message}`);
    }
}

export default {hiTrainer, createPokemon, delPokemon, actPokemon};