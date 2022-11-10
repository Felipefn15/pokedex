import React, { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Pokemon } from "../../types";
import PokemonCard from "../pokemonCard";
import './index.css';

function Home() {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([])
  const [showPokemons, setShowPokemons] = useState<Pokemon[]>([])
  const [position, setPosition] = useState(0)
  useEffect(() => {
    const setLocalInformations = async () => {
      const jsonPokemons = localStorage.getItem("pokemons") || ""
      setAllPokemons(JSON.parse(jsonPokemons))
      setPosition(0)
      setShowPokemons(JSON.parse(jsonPokemons).slice(position, position + 4))
    }
    setLocalInformations()
  }, [])


  const fetchData = () => {
    const newPosition = position + 4
    console.log({ newPosition, allPokemons, showPokemons, position })
    if (newPosition + 4 < allPokemons.length) {
      setShowPokemons(allPokemons.slice(newPosition, newPosition + 4))
      setPosition(newPosition)
    }
    else {

      setShowPokemons(allPokemons.slice(position, allPokemons.length))
      setPosition(allPokemons.length)
    }

  }

  return (
    <div className="homeWrapper">
      <InfiniteScroll
        dataLength={showPokemons.length}
        next={fetchData}
        style={{ height: "100%", width: "100%", maxHeight: "100%", maxWidth: "100%" }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      // below props only if you need pull down functionality
      // refreshFunction={this.refresh}
      // pullDownToRefresh
      // pullDownToRefreshThreshold={50}
      // pullDownToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      // }
      // releaseToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      // }
      >
        {
          showPokemons.map((pokemon: Pokemon, index) => {
            return PokemonCard(pokemon)
          })
        }
      </InfiniteScroll>
    </div>
  );
}


export default Home;
