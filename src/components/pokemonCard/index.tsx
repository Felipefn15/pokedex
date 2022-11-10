import { Pokemon } from "../../types";

import './index.css'; 

const PokemonCard = (item: Pokemon) => {

    return (
        <div className="cardWrapper" key={item.id}>
            <img src={item.sprites.front_default} alt={`${item.name}_${item.id}`} />
            <div className="cardInfo">
                <p>#{item.id}</p>
                <h2>{item.name.toUpperCase()}</h2>
            </div>
        </div >
    );
}


export default PokemonCard;
