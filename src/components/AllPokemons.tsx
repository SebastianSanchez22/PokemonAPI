import { Pokemon } from '../models/Pokemon';
import { useState, useEffect } from "react";
import { ShowPokemon } from './PokemonInfo';
import { fetchAll } from '../apis/FetchAll';
import MainFilter from '../utils/filterPokemons';

export const AllPokemons = () => {
  const [filterPokemons, setFilterPokemons] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>();

  useEffect(() => {
    const fetchAllPokemons = async() =>{   
            const pokemonsInfo = await fetchAll(); 
            setPokemons(pokemonsInfo);
    }
    fetchAllPokemons();
  }, [])

  const filteredPokemons = pokemons?.slice(0,600).filter((pokemon)=>{
    return pokemon.name.toLowerCase().match(filterPokemons.toLowerCase());
  });
  
  return (
    <>
    <MainFilter query = {filterPokemons} setQuery = {setFilterPokemons}/>
      {filteredPokemons?.map((pokemon:any) => {
        return (
        <ShowPokemon key={pokemon.id} namePokemon={pokemon?.name}></ShowPokemon>
      )})};
    </>
  )
}

