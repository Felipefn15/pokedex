import { Pokemon } from "../../types";
import { useNavigate } from "react-router-dom";
import './index.css';
import { StarOutlined } from "@ant-design/icons"
import bugType from "../../assets/types/bug.png"
import darkType from "../../assets/types/dark.png"
import dragonType from "../../assets/types/dragon.png"
import electricType from "../../assets/types/electric.png"
import fairyType from "../../assets/types/fairy.png"
import fireType from "../../assets/types/fire.png"
import fightingType from "../../assets/types/fighting.png"
import flyingType from "../../assets/types/flying.png"
import ghostType from "../../assets/types/ghost.png"
import grassType from "../../assets/types/grass.png"
import groundType from "../../assets/types/ground.png"
import iceType from "../../assets/types/ice.png"
import normalType from "../../assets/types/normal.png"
import poisonType from "../../assets/types/poison.png"
import psychicType from "../../assets/types/psychic.png"
import rockType from "../../assets/types/rock.png"
import steelType from "../../assets/types/steel.png"
import waterType from "../../assets/types/water.png"

const PokemonCard = (item: Pokemon) => {
    const navigate = useNavigate();
    const getTypeIcon = (name: string) => {
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

    const seeDetails = () => {
        localStorage.setItem("pokemon", JSON.stringify(item))
        navigate("/details")
    }

    return (
        <button className="cardWrapper" key={item.id} onClick={() => seeDetails()}>
            <div className="cardImage" >
                <img src={item.sprites.front_default} alt={`${item.name}_${item.id}`} />
            </div>
            <div className="cardInfo">
                <p>#{item.id}</p>
                <h3 className="pokemonName">{item.name.toUpperCase()}</h3>
                {
                    item.types.map((type) => {
                        return (
                            <img src={getTypeIcon(type.name.toLowerCase())} alt={type.name} className="typeIcon" />
                        )
                    })
                }
            </div>
            <StarOutlined className="favorite" />
        </button >
    );
}


export default PokemonCard;
