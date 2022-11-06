import React from "react";
import './Home.css'
import Logo from '../assets/Logo.png'
import acc_img from '../assets/account.png'

function Home(){
    return(
        <div>
            <div className="Nav">
                <img className="Logo" src={Logo} alt="Logo" />
                <button>Write a Review</button>
                <img src={acc_img} alt="account" />
            </div>
        </div>
    );
}

export default Home;