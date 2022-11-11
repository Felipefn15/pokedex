import React, { useState } from "react";
import { HomeFilled, HomeOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { HomeProps, Pokemon } from "../../types";
import PokemonCard from "../pokemonCard";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './index.css';

function Home(props: HomeProps) {
  // const [onlyFavorite, setOnlyFavorite] = useState('1')
  // const radios = [
  //   { icon: <HomeFilled />, value: '1' },
  //   { icon: <StarFilled />, value: '2' },
  // ];

  return (
    <div className="homeWrapper">
      {/* <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={onlyFavorite === radio.value}
            onChange={(e) => setOnlyFavorite(e.currentTarget.value)}
          >
            {radio.icon}
          </ToggleButton>
        ))}
      </ButtonGroup> */}
      {
        props.pokemons.map((pokemon: Pokemon) => {
          return PokemonCard(pokemon)
        })
      }
    </div>
  );
}


export default Home;
