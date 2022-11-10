export interface Pokemon {
    id: number,
    name: string,
    sprites: Sprite,
    types: Type[],
}

export interface Sprite {
    front_default: string,
    front_shiny: string
}

export interface Type {
    id: number,
    name: string
}