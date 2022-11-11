import { Pokemon } from "../../types";
import { useNavigate } from "react-router-dom";
import './index.css';
import { StarOutlined } from "@ant-design/icons"
import { getTypeIcon } from "../../utils/getType";


const PokemonCard = (item: Pokemon) => {
    const navigate = useNavigate();
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
