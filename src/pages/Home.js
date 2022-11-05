import React from 'react';
import logo from '../assets/74557.png';
import account from '../assets/account.png'
import carousel1 from '../assets/carousel-1.png'
import carousel2 from '../assets/carousel-2.png'
import carousel3 from '../assets/carousel-3.png'
import Carousel from 'react-bootstrap/Carousel';

function Home(){
    return(
        <div>
            <div className='Nav'>
                <img className='logo' src={logo} alt="logo" />
                <input type="text" placeholder="Search.."></input>
                <a href="">Claim your house</a>
                <a href="">Write a review</a>
                <img className='account-img' src={account} alt="" />
            </div>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Home;
