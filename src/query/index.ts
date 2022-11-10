import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://dex-server.herokuapp.com/",
  cache: new InMemoryCache(),
});

export const getAll = () => {
  return client
    .query({
      query: gql`
        query GetAllPokemons {
          allPokemon {
            id
            name
            types {
              id
              name
            }
            sprites {
              front_default
              front_shiny
            }
          }
        }
      `,
    })
    .then((result) => result);
};

export const getPokemon = (id: number) => {
  client
    .query({
      query: gql`
        query GetPokemon {
          pokemon(id: ${id}) {
            id
            name
            types {
              id
              name
            }
            sprites{
                front_default
                front_shiny
            }
            evolves_to {
              id
              name
              types {
                id
                name
              }
            }
          }
        }
      `,
    })
    .then((result) => console.log(result));
};

export const getAllTypes = () => {
  return client
    .query({
      query: gql`
        query GetAllTypes {
          allTypes {
            id
            name
          }
        }
      `,
    })
    .then((result) => result);
};
