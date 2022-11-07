import React from "react";
import './Home.css';
import Cards from "./Cards";
import Logo from '../assets/Logo.png'
import acc_img from '../assets/account.png'
import { useAuth0 } from "@auth0/auth0-react";
import MapAndReviewContainer from "../containers/MapAndReviewContainer";
import getGeoCode from "./latlng.Js";


function Explore(){
    const {
        loginWithRedirect,
        logout,
        } = useAuth0();
    
    const logoutWithRedirect = () =>
    logout({
        returnTo: window.location.origin,
    });

    return (
        <div className="container">
            <div className="Nav">
                <div className="rowFlexLeft">
                    <a href="/"><img className="Logo" src={Logo} alt="Logo" /></a>
                    <a href="/"><h2 className="Title">GoodCandy</h2></a>
                </div>

                <div className="rowFlexMid">
                    <a href="/about">About</a>
                    <a href="explore">Find Houses</a>
                </div>

                <div className="rowFlexRight">
                    <a href="/submit_review"><button>Write a Review</button></a>
                    <img className="account" onClick={() => logoutWithRedirect()} src={acc_img} alt="account" />
                </div>

            </div>
            <div className="map1">
                <MapAndReviewContainer/>
            </div>
            <div className="cards">

                    

                    <Cards name="Hotel Transylvania" rating={5} review="Had a great assortment of candy, everyone was super friendly and looked real."/>
                    <Cards name="Hotel Transylvania" rating={4} review="Was scared every second I was there. This place is truly terrifying!!"/>
                    <Cards name="Hotel Transylvania" rating={5} review="Ghosts!!! 👻"/>
                    <Cards name="Hotel Transylvania" rating={0} review="The staff here are extremely rude and one of the bell boys bit my hand off. 😡"/>
            </div>
        </div>
    )
}

export default Explore;