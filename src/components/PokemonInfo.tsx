import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../models/Pokemon";
import { fetchPokemon } from "../apis/FetchPokemon";

export const ShowPokemon = () => {
    //const {name} = useParams();
    const [pokemon, setPokemon] = useState<Pokemon>();

    useEffect(() => {
        const fetchCurrent = async() =>{   
                const currentPokemon = await fetchPokemon("dragonite");
                setPokemon(currentPokemon);
        }
        fetchCurrent();
    })
    return (
        <>
        <h1>{pokemon?.id}</h1>
        <span>Name: {pokemon?.name} </span>
        <img src={pokemon?.gif} alt={pokemon?.name} />
        <span>HP: {pokemon?.hp} </span>
        <span>Attack: {pokemon?.attack} </span>
        <span>Defense: {pokemon?.defense} </span>
        <span>Special attack: {pokemon?.specialAttack} </span>
        <span>Special defense: {pokemon?.specialDefense} </span>
        <span>Speed: {pokemon?.speed} </span>
        <span>Type 1: {pokemon?.type[0]} </span>
        <span>Type 2: {pokemon?.type[1]} </span>
        </>
    )
}