import { HomeFilled, StarFilled } from "@ant-design/icons";
import React from "react";
import './index.css';
function Details() {
    const pokemonJson = localStorage.getItem("pokemon") || ""
    const pokemon = JSON.parse(pokemonJson)
    console.log(pokemon)
    return (
        <div className="detailsWrapper">
            <div className="detailsHeader">
                <HomeFilled />
                <div />
                <StarFilled />
            </div>
        </div>
    )
}


export default Details;
