import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('render all pokemons', async () => {
  render(<App />);
  const anyPokemon = screen.getByTestId("any_pokemon")
  expect(anyPokemon).toBeInTheDocument();
  await new Promise((r) => setTimeout(r, 1000));
  const card = screen.getByTestId("pokemon_card_1")
  expect(card).toBeInTheDocument();
});
