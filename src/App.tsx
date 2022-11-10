import React, { useEffect } from 'react';
import greenBall from './assets/greren_ball.png';
import pokeball from './assets/pokeball.png';
import './App.css';
import { getAll, getAllTypes } from "./query/index"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home"
function App() {
  useEffect(() => {
    const setLocalInformations = async () => {
      const resp = await getAll()
      localStorage.setItem("pokemons", JSON.stringify(resp.data.allPokemon))
      const respTypes = await getAllTypes()
      localStorage.setItem("types", JSON.stringify(respTypes.data.allTypes))
    }
    setLocalInformations()
  }, [])
  return (
    <div className="AppWrapper">
      <div className='Pokedex'>
        <div className='header'>
          <img src={greenBall} alt="GreenBall" className='greenBall' />
          <h1>POKEDÉX OF ANOMALIES</h1>
          <img src={pokeball} alt="Pokeball" className='pokeball' />
        </div>
        <div className='content'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div >
  );
}

export default App;
