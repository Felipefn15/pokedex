import { PokemonCardProps } from "../../types";
import { useNavigate } from "react-router-dom";
import './index.css';
import { StarOutlined } from "@ant-design/icons"
import { getTypeIcon } from "../../utils/getType";


const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    const navigate = useNavigate();
    const seeDetails = () => {
        localStorage.setItem("pokemon", JSON.stringify(pokemon))
        navigate("/details")
    }

    return (
        <button className="cardWrapper" key={pokemon.id} onClick={() => seeDetails()}>
            <div className="cardImage" >
                <img src={pokemon.sprites.front_default} alt={`${pokemon.name}_${pokemon.id}`} />
            </div>
            <div className="cardInfo">
                <p>#{pokemon.id}</p>
                <h3 className="pokemonName">{pokemon.name.toUpperCase()}</h3>
                {
                    pokemon.types.map((type) => {
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