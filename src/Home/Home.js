import React from "react";
import './Home.css'
import Logo from '../assets/Logo.png'
import acc_img from '../assets/account.png'
import house from '../assets/image.png';
import MapAndReviewContainer from '../containers/MapAndReviewContainer'

function Home(){
    return(
        <div className="container">
            <div className="Nav">
                <div className="rowFlexLeft">
                    <a href="/"><img className="Logo" src={Logo} alt="Logo" /></a>
                    <a href="/"><h2 className="Title">GoodCandy</h2></a>
                </div>

                <div className="rowFlexMid">
                    <a href="/about">About</a>
                    <a href="">Find Houses</a>
                </div>

                <div className="rowFlexRight">
                    <a href="/submit_review"><button>Write a Review</button></a>
                    <img className="account" src={acc_img} alt="account" />
                </div>
            </div>

            <div className="midDiv">
                <div className="midText">
                    <h2>Make the most of your Halloween</h2>
                    <p>Look through thousands of reviews to find the best spots for candy</p>
                    <a href=""><button>Get Started</button></a>
                </div>
                <img src={house} alt="" />
            </div>
            <div>

            </div>
            <MapAndReviewContainer/>
        </div>
    );
}

export default Home;