import bugType from "../assets/types/bug.png"
import darkType from "../assets/types/dark.png"
import dragonType from "../assets/types/dragon.png"
import electricType from "../assets/types/electric.png"
import fairyType from "../assets/types/fairy.png"
import fireType from "../assets/types/fire.png"
import fightingType from "../assets/types/fighting.png"
import flyingType from "../assets/types/flying.png"
import ghostType from "../assets/types/ghost.png"
import grassType from "../assets/types/grass.png"
import groundType from "../assets/types/ground.png"
import iceType from "../assets/types/ice.png"
import normalType from "../assets/types/normal.png"
import poisonType from "../assets/types/poison.png"
import psychicType from "../assets/types/psychic.png"
import rockType from "../assets/types/rock.png"
import steelType from "../assets/types/steel.png"
import waterType from "../assets/types/water.png"


export const getTypeIcon = (name: string) => {
    switch (name) {
        case "bug":
            return bugType
        case "dark":
            return darkType
        case "dragon":
            return dragonType
        case "electric":
            return electricType
        case "fairy":
            return fairyType
        case "fire":
            return fireType
        case "fighting":
            return fightingType
        case "flying":
            return flyingType
        case "ghost":
            return ghostType
        case "grass":
            return grassType
        case "ground":
            return groundType
        case "ice":
            return iceType
        case "normal":
            return normalType
        case "poison":
            return poisonType
        case "psychic":
            return psychicType
        case "rock":
            return rockType
        case "steel":
            return steelType
        case "water":
            return waterType
    }

}