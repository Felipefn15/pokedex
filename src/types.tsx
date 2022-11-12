export interface Pokemon {
    id: number,
    name: string,
    sprites: Sprite,
    types: Type[],
    favorite?: boolean
}

export interface Sprite {
    front_default: string,
    front_shiny: string
}

export interface Type {
    id: number,
    name: string
}

export interface FilterValues {
    name?: string,
    typeId?: number,
    orderBy?: number
}

export interface FilterProps {
    filter: FilterValues | undefined,
    types: Type[]
    setFilter: any
    goToFavorite: boolean
}

export interface HomeProps {
    pokemons: Pokemon[]
    onlyFavorites: boolean
}

export interface PokemonCardProps {
    pokemon: Pokemon
}