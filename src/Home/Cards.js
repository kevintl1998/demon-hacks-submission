import React from "react";
import './Cards.css'
import hotel from "../assets/hotel.png"

function Cards(props){
    return(
        <div className="card">
            <div className="container">
                <img src={hotel} alt="" />
                <h2>{props.name}</h2>
                <p>{props.rating}</p>
                <p>{props.review}</p>
            </div>
        </div>
    );
}

export default Cards;