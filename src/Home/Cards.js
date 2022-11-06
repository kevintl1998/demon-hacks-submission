import React from "react";
import './Cards.css'
import hotel from "../assets/hotel.png"
import axios from "axios";

// call api to get reviews and display them in cards
const Cards = (props) => {
    const [reviews, setReviews] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:9000/get-reviews')
            .then((res) => {
                setReviews(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const reviewCards = reviews.map((review) => {
        return (
            <div className="card">
                <div className="container">
                    <img src={hotel} alt="" />
                </div>
                    <h2>Address: {review.Address}, {review.ZipCode}</h2>
                    <p>Rating: {review.Rating}</p>
                    <p>Review: {review.Review}</p>
                    <p>-{review.FullName}</p>
                </div>
        )
    }
    )
    return (
        <>
            {reviewCards}
        </>
    )
}

export default Cards;
