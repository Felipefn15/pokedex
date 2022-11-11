import { HomeOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Pokemon } from "../../types";
import { useNavigate } from "react-router-dom";
import { getTypeIcon } from "../../utils/getType";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button'
import './index.css';

function Details() {
    const [showShiny, setShowShiny] = useState('1')
    const [index, setIndex] = useState(0)
    const [isFavorite, setIsFavorite] = useState(false)
    const pokemonJson = localStorage.getItem("pokemon") || ""
    const pokemonsJson = localStorage.getItem("pokemons") || ""
    const favoriteJson = localStorage.getItem("favorites") || ""
    const navigate = useNavigate();

    let pokemons: Pokemon[]
    pokemons = JSON.parse(pokemonsJson)
    let pokemon: Pokemon
    pokemon = JSON.parse(pokemonJson)
    let favorites: number[]
    favorites = JSON.parse(favoriteJson)

    useEffect(() => {
        setIndex(pokemons.map((value, index) => value.id === pokemon.id && index).filter((item) => item !== false)[0] || 0)
        setIsFavorite(favorites.indexOf(pokemon.id) > -1)
    }, [])

    const previousPokemon = () => {
        pokemon = pokemons[index - 1]
        setIndex(index - 1)
        setIsFavorite(favorites.indexOf(pokemon.id) > -1)
        localStorage.setItem('pokemon', JSON.stringify(pokemon))
    }

    const nextPokemon = () => {
        pokemon = pokemons[index + 1]
        setIndex(index + 1)
        setIsFavorite(favorites.indexOf(pokemon.id) > -1)
        localStorage.setItem('pokemon', JSON.stringify(pokemon))
    }

    const handleFavorite = () => {
        const index = favorites.indexOf(pokemon.id)
        if (index > -1) {
            favorites.splice(index, 1)
            setIsFavorite(false)
        }
        else {
            favorites.push(pokemon.id)
            setIsFavorite(true)
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }

    const radios = [
        { name: 'Normal', value: '1' },
        { name: 'Shiny', value: '2' },
    ];

    return (
        <div className="detailsWrapper">
            <div className="detailsHeader">
                <HomeOutlined onClick={() => navigate("/")} />
                <ButtonGroup>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                            name="radio"
                            value={radio.value}
                            checked={showShiny === radio.value}
                            onChange={(e) => setShowShiny(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
                {isFavorite ? <StarFilled onClick={() => handleFavorite()} /> : <StarOutlined onClick={() => handleFavorite()} />}
            </div>
            <div className="detailContent">
                <Button
                    variant="danger"
                    className="controlButton"
                    onClick={() => previousPokemon()}
                    disabled={index < 1}
                >
                    <h3>{"<"}</h3>
                </Button>
                <div className="detailCard">
                    <img src={showShiny === '2' ? pokemon?.sprites.front_shiny : pokemon?.sprites.front_default} alt={`${pokemon?.name}_${pokemon?.id}`} className="detailImage" />

                    <p>#{pokemon?.id}</p>
                    <h3 className="pokemonName">{pokemon?.name.toUpperCase()}</h3>
                    {
                        pokemon?.types.map((type) => {
                            return (
                                <img src={getTypeIcon(type.name.toLowerCase())} alt={type.name} className="typeIcon" />
                            )
                        })
                    }
                </div>
                <Button
                    variant="danger"
                    className="controlButton"
                    onClick={() => nextPokemon()}
                >
                    <h3>{">"}</h3>
                </Button>
            </div>
        </div>
    )
}


export default Details;
