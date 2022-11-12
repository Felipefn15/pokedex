import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render all pokemons', async () => {
  render(<App />);
  const anyPokemon = screen.getByTestId("any_pokemon")
  expect(anyPokemon).toBeInTheDocument();
  await new Promise((r) => setTimeout(r, 4000));
  const card = screen.getByTestId("pokemon_card_1")
  expect(card).toBeInTheDocument();
});
