import React from "react";
// import InfiniteScroll from 'react-infinite-scroll-component';
import { HomeProps, Pokemon } from "../../types";
import PokemonCard from "../pokemonCard";
import './index.css';

function Home(props: HomeProps) {
  // const [position, setPosition] = useState(0)

  // const fetchData = () => {
  //   const newPosition = position + 4
  //   console.log({ newPosition, allPokemons, showPokemons, position })
  //   if (newPosition + 4 < allPokemons.length) {
  //     setShowPokemons(allPokemons.slice(newPosition, newPosition + 4))
  //     setPosition(newPosition)
  //   }
  //   else {

  //     setShowPokemons(allPokemons.slice(position, allPokemons.length))
  //     setPosition(allPokemons.length)
  //   }

  // }

  return (
    <div className="homeWrapper">
      {/* <InfiniteScroll
        dataLength={showPokemons.length}
        next={fetchData}
        style={{ height: "100%", width: "100%", maxHeight: "100%", maxWidth: "100%" }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        */}

      {
        props.pokemons.map((pokemon: Pokemon) => {
          return PokemonCard(pokemon)
        })
      }
      {/* </InfiniteScroll> */}
    </div>
  );
}


export default Home;
