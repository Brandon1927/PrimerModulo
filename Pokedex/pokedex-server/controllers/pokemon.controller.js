import Pokemon from "../models/pokemon.model.js";
import fetchPokemon from "../services/fetchPokemon.js";

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
};

const getPokemons = async (req, res) =>{
    try {
        const pokemones = await Pokemon.find();
        res.status(200).json(pokemones);
    } catch (error) {
        res.status(500).json(`El error es: ${error.message}`);
    }
};

const getPokemonById = async (req, res)=>{
    try {
        const pokemonId = req.params.pokemon_id;
        let pokemon = await Pokemon.findOne({"pokemon_id":pokemonId});
        if(!pokemon){
            pokemon={
                pokemon_id:pokemonId,
                view:false,
                catch:false,
                in_team:false
            };
        };
        const pokemonData = await fetchPokemon(pokemonId,pokemon);
        if(pokemonData == 404){
            return res.status(404).json({
                message: "Pokemon not found",
                status:404,
                data: null
            });
        };
        return res.status(200).json({
            message: "Ok",
            status:200,
            data: pokemonData
        });
    } catch (error) {
        res.status(404).json(`El error es: ${error.message}`);
    }
};



export default {hiTrainer, createPokemon, getPokemons, getPokemonById};