import React from 'react';
import './Home.css';
import Logo from '../assets/Logo.png'
import acc_img from '../assets/account.png'

function WriteReview() {
    return (
        <div>
            <div className="Nav">
                <div className="rowFlexLeft">
                    <img className="Logo" src={Logo} alt="Logo"/>
                    <h2 className="Title">GoodCandy</h2>
                </div>
                <div className="rowFlexMid">
                    <a href="/about">About</a>
                    <a href="">Find Houses</a>
                </div>

                <div className="rowFlexRight">
                    <a href=""><button>Write a Review</button></a>
                    <img className="account" src={acc_img} alt="account" />
                </div>
            </div>
        </div>
    )
}

export default WriteReview