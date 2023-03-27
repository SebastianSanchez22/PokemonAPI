import { Pokemon } from "../models/Pokemon";

export async function fetchPokemon(idPokemon:string):Promise<Pokemon> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`)
    if(!response.ok){
        throw new Error('Failed to fetch Pokemon');
    }
    const results = await response.json();
    const pokemonData = {
        name:results.name,
        id:results.id,
        type:results.types.map((element:any) => (element?.type.name)),
        gif:`https://img.pokemondb.net/sprites/black-white/anim/normal/${idPokemon.toLowerCase()}.gif`,
        hp:results.stats[0].base_stat,
        attack:results.stats[1].base_stat,
        defense:results.stats[2].base_stat,
        specialAttack:results.stats[3].base_stat,
        specialDefense:results.stats[4].base_stat,
        speed:results.stats[5].base_stat
    }
    return pokemonData;
}