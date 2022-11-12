import React from "react";
import { HomeProps, Pokemon } from "../../types";
import PokemonCard from "../pokemonCard";
import './index.css';

function Home(props: HomeProps) {

  const checkFavoriteList = () => {
    const favoriteJson = localStorage.getItem("favorites") || ""
    let favorites: number[]
    favorites = JSON.parse(favoriteJson)
    return favorites
  }

  const setFavorites = () => {
    const list = checkFavoriteList()
    const pokemons = props.pokemons.map((pokemon) => {
      let newPokemon = { ...pokemon }
      if (list.includes(pokemon.id))
        newPokemon.favorite = true
      return newPokemon
    })
    return pokemons
  }

  const returnPokemonList = () => {
    const pokemonList = setFavorites()
    if (props.onlyFavorites) {
      return pokemonList.filter((pokemon) => pokemon.favorite)
    }
    else
      return pokemonList
  }

  return (
    <div className="homeWrapper">
      {
        returnPokemonList().length > 0 ? returnPokemonList().map((pokemon: Pokemon) => {
          return <PokemonCard pokemon={pokemon} />
        }) : <h3 className="pokemonName">Any Pokemon Found</h3>
      }
    </div>
  );
}


export default Home;