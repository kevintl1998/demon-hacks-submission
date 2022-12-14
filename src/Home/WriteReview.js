import React from 'react';
import './Home.css';
import './WriteReview.css';
import Logo from '../assets/Logo.png';
import acc_img from '../assets/account.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {MenuItem} from "@mui/material";
import styled from '@mui/system/styled';
import Button from '@mui/material/Button';
import axios from "axios";

function postReview(fullName, address, zipCode, review, rating) {
    axios.post('http://localhost:9000/post-reviews', {
        FullName: fullName,
        Address: address,
        ZipCode: zipCode,
        Review: review,
        Rating: rating
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}

const ratings = [
    {
        value: '0',
        label: '(0)'
    },
    {
        value: '1',
        label: '⭐ (1)'
    },
    {
        value: '2',
        label: '⭐⭐ (2)'
    },
    {
        value: '3',
        label: '⭐⭐⭐ (3)'
    },
    {
        value: '4',
        label: '⭐⭐⭐⭐ (4)'
    },
    {
        value: '5',
        label: '⭐⭐⭐⭐⭐ (5)'
    }];

let curAddress = "";
let curReview = "";
let curRating = -1;
let curFullName = "";
let curZipCode = "";

let submitForm = function () {
    let address = curAddress;
    let review = curReview;
    let rating = curRating;
    let fullName = curFullName;
    let zipCode = curZipCode;

    let shouldSubmit = true;
//    validate addr
    if (address === "") {
        shouldSubmit = false;
    }

//    validate review
    if (review === "") {
        shouldSubmit = false;
    }

    if (zipCode === "") {
        shouldSubmit = false;
    }

    if (fullName === "") {
        shouldSubmit = false;
    }
//    validate rating
    if (rating > 5 || rating < 0) {
        shouldSubmit = false;
    }
    if (shouldSubmit) {
        // api call to submit review here
        window.alert("Review submitted successfully")
    } else {
        window.alert("Failed to submit form. Make sure you filled in every box correctly.")
    }

    postReview(curFullName, curAddress, curZipCode, curReview, curRating);
    
}

export function WriteReview() {
    const [rating, setRating] = React.useState('0');
    const handleAddrChange = (event) => {
        curAddress = event.target.value;
        console.log(curAddress)
    }
    const handleReviewChange = (event) => {
        curReview = event.target.value;
        console.log(curReview)
    }
    const handleRatingChange = (event) => {
        curRating = event.target.value;
        setRating(event.target.value);
    };

    const handleFullNameChange = (event) => {
        curFullName = event.target.value;
        console.log(curFullName)
    }

    const handleZipCodeChange = (event) => {
        curZipCode = event.target.value;
        console.log(curZipCode)
    }


    const textFieldStyle = {
        // backgroundColor: 'white',
        borderColor: 'white',
        width: "100%",
        height: "100%",
        display: "flex",
        borderRadius: "8px",
        // alignSelf: "center"

    }
    const StyledField = styled(TextField)(textFieldStyle);
    const divStyle = {
        borderRadius: '25px',
        backgroundColor: 'grey'
    }
    const fancyDiv = styled('div')(divStyle);
    return (
        <div>
            <div className="Nav">
                <div className="rowFlexLeft">
                    <a href="/"><img className="Logo" src={Logo} alt="Logo"/></a>
                    <a href="/"><h2 className="Title">GoodCandy</h2></a>
                </div>
                <div className="rowFlexMid">
                    <a href="/about">About</a>
                    <a href="">Find Houses</a>
                </div>

                <div className="rowFlexRight">
                    <a href=""><button onClick={void(0)}>Write a Review</button></a>
                    <img className="account" src={acc_img} alt="account" />
                </div>
            </div>

            <div className="formBorder">
                <Box component="form" noValidate>
                    <div className="formContainer">
                    <div className="form">
                            <StyledField id="address-field" label="Full Name" style={{ color: "white" }} bottom="10%" onChange={handleFullNameChange} />
                        </div>
                        <div className="form">
                            <StyledField id="address-field" label="Address" style={{ color: "white" }} bottom="10%" onChange={handleAddrChange} />
                        </div>
                        <div className="form">
                            <StyledField id="address-field" label="Zip Code" style={{ color: "white" }} bottom="10%" onChange={handleZipCodeChange} />
                        </div>
                        <div className="form">
                            <StyledField id="review-field" label="Review" onChange={handleReviewChange} />
                        </div>
                        <div className="form">
                            <StyledField id="rating-field"
                                         select
                                         label="Rating"
                                         top="4%"
                                         onChange={handleRatingChange}
                                         value={rating}>
                                {ratings.map((option) => (
                                    <MenuItem key={option.label} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </StyledField>
                        </div>
                        <div className="form">
                            <Button variant="contained" onClick={submitForm}>Submit Review</Button>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
}
