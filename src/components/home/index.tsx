import React from "react";
// import InfiniteScroll from 'react-infinite-scroll-component';
import { HomeProps, Pokemon } from "../../types";
import PokemonCard from "../pokemonCard";
import './index.css';

function Home(props: HomeProps) {


  return (
    <div className="homeWrapper">

      {
        props.pokemons.map((pokemon: Pokemon) => {
          return PokemonCard(pokemon)
        })
      }
    </div>
  );
}


export default Home;
