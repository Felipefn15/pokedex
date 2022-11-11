import React, { useEffect, useState } from 'react';
import greenBall from './assets/greren_ball.png';
import pokeball from './assets/pokeball.png';
import { HomeFilled, StarFilled } from "@ant-design/icons";
import './App.css';
import { getAll, getAllTypes } from "./query/index"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home"
import Filter from './components/filter';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { FilterValues, Pokemon, Type } from './types';
import Details from './components/details';
function App() {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([])
  const [types, setTypes] = useState<Type[]>([])
  const [filters, setFilters] = useState<FilterValues>()
  const [onlyFavorites, setOnlyFavorites] = useState('1')


  const radios = [
    { icon: <HomeFilled />, value: '1' },
    { icon: <StarFilled />, value: '2' },
  ];

  useEffect(() => {
    const setLocalInformations = async () => {
      const resp = await getAll()
      setAllPokemons(resp.data.allPokemon)
      localStorage.setItem("pokemons", JSON.stringify(resp.data.allPokemon))
      localStorage.setItem('favorites', JSON.stringify([]))
      const respTypes = await getAllTypes()
      setTypes(respTypes.data.allTypes)
    }
    setLocalInformations()
  }, [])

  const filterPokemons = () => {
    let showPokemons: Pokemon[] = allPokemons

    if (onlyFavorites === '2') {
      // const favoriteJson = localStorage.getItem("favorites") || ""
      let favorites: number[]
      // favorites = JSON.parse(favoriteJson)
      favorites = [1, 2, 3]
      favorites.forEach((id) => {
        showPokemons = []
        allPokemons.forEach((pokemon) => {
          if (pokemon.id === id)
            showPokemons.push(pokemon)
        })
      })
    }

    if (filters?.name) {
      const name = filters.name
      showPokemons = showPokemons.filter(pokemon => pokemon.name.includes(name))
    }

    if (filters?.typeId && filters?.typeId > 0) {
      const id = Number(filters.typeId)
      showPokemons = showPokemons.filter(pokemon => pokemon.types.filter((type) => type.id === id).length > 0)
    }

    if (filters?.orderBy && filters?.orderBy > 0) {
      const orderBy = Number(filters.orderBy)
      showPokemons = showPokemons.slice().sort((a, b) => {
        if (orderBy === 1)
          return compareName(a.name, b.name)
        else {
          return compareName(a.types[0].name, b.types[0].name)
        }
      }
      );
    }

    return showPokemons
  }

  function compareName(a: string, b: string) {
    const name1 = a.toUpperCase() || "";
    const name2 = b.toUpperCase() || "";
    let comparison = 0;

    if (name1 > name2) {
      comparison = 1;
    } else if (name1 < name2) {
      comparison = -1;
    }
    return comparison;
  }

  return (
    <div className='Pokedex'>
      <div className='header'>
        <img src={greenBall} alt="GreenBall" className='greenBall' />
        <h1 className='title'>POKEDÉX OF ANOMALIES</h1>
        <img src={pokeball} alt="Pokeball" className='pokeball' />
      </div>
      {/* <div className='favoriteFilter'>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? 'outline-success' : 'outline-danger'}
              name="radio"
              value={radio.value}
              checked={onlyFavorites === radio.value}
              onChange={(e) => setOnlyFavorites(e.currentTarget.value)}
            >
              {radio.icon}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div> */}
      <div className='content'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home pokemons={filterPokemons()} />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className='filter'>
        <Filter setFilter={setFilters} filter={filters} types={types} />
      </div>
    </div >
  );
}

export default App;
