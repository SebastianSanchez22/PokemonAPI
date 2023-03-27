import { useState, useEffect } from "react";
import { Pokemon } from "../models/Pokemon";
import { fetchPokemon } from "../apis/FetchPokemon";
import { formatName } from "../utils/formatName";

export const ShowPokemon = (current:any) => {
    const [pokemon, setPokemon] = useState<Pokemon>();

    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        const fetchCurrent = async() =>{ 
            const currentPokemon = await fetchPokemon(formatName(current.namePokemon.toLowerCase()));
                
            setPokemon(currentPokemon);
        }
        fetchCurrent();
    }, [])
    return (
        <>
        <div>
            <h1 className="text-lg font-bold w-full flex justify-center items-center">{pokemon?.id}</h1>
            <span className="flex justify-center items-center capitalize text-4xl">{pokemon?.name} </span>
            <div className="flex justify-center pb-8">
                <img onClick={() => setShowModal(!showModal)} src={pokemon?.gif} alt={pokemon?.name} />
            </div>
        </div>
        {
            !showModal? (null) : (
                <div className="text-lg font-bold w-full flex justify-center items-center">
                    <h2 className="">HP: {pokemon?.hp} </h2>
                    <h2>Attack: {pokemon?.attack}</h2>
                    <h2>Defense: {pokemon?.defense}</h2>
                    <h2>Special attack: {pokemon?.specialAttack}</h2>
                    <h2>Special defense: {pokemon?.specialDefense}</h2>
                    <h2>Speed: {pokemon?.speed}</h2>
                    {pokemon?.type.map((element:any, index) => {
                        return (<span>{`type ${index+1}: ${element}`} </span>)
                    })}
                </div>
            )
        }
        
        </>
    )
}