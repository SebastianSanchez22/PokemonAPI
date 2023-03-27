import { Pokemon } from "../models/Pokemon";
import { formatName } from "../utils/formatName";

export async function fetchAll():Promise<Pokemon[]> {
    const response = await fetch(`https://unpkg.com/pokemons@1.1.0/pokemons.json`)
    if(!response.ok){
        throw new Error('Failed to fetch Pokemon');
    }
    const {results} = await response.json();
    const allPokemonInfo = results.map((pokemon:any) => {
        return (
        {
            name: pokemon?.name,
            id: pokemon?.national_number,
            gif:`https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(pokemon.name.toLowerCase())}.gif`,
        }
        )
    });

    const uniquePokemons=allPokemonInfo.filter(
        (pokemon:any,index:number)=>
        allPokemonInfo.findIndex((other:any)=>other.id===pokemon.id)===index
    )

    return uniquePokemons as Pokemon[];
}
