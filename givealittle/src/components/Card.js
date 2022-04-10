import React from "react";
import './styles/sellers-page.css'

const Card = ({id, name, image, desc, price, stock}) => {
    return (
        <div className="card-container">

            <img className="card-image" src={image}></img>

            <h5 className="card-name">{name}</h5>

            <p className="card-description">{desc}</p>

            <h6 className="card-stock">in stock <b>{stock}</b></h6>

            <h5 className="price-container">R<b>{price}</b></h5>
           
        </div>
    )  
}

export default Card;