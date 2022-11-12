import React from "react";
import { HomeProps, Pokemon } from "../../types";
import PokemonCard from "../pokemonCard";
import './index.css';

function Home(props: HomeProps) {

  return (
    <div className="homeWrapper">
      {
        props.pokemons?.length > 0 ? props.pokemons.map((pokemon: Pokemon) => {
          return <PokemonCard pokemon={pokemon} />
        }) : <p>LOADING...</p>
      }
    </div>
  );
}


export default Home;