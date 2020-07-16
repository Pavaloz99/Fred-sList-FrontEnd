import React, {Component} from 'react';
import {Link} from 'react-router-dom'


import './listing.css';

function Listing(props) { 
        return(
            <>
            <div className="container">
            <Link to ={"/post/" + props.id}>
             
                    <div className="post-info">
                        <div className="item-info-2">
                            <h1>Title: {props.name}</h1>
                            <h2>Condition: {props.condition}</h2>
                            <h2>Asking: {props.price}</h2>
                        </div>
                        <div className="seller-info">
                            <h2>Seller: {props.user}</h2>
                            <h2>Rating: {props.rating}</h2>
                        </div>
                    </div>
                    <div className="img-container">
                        <img src={"data:image/jpeg;base64," + props.img} alt="Something"/>
                    </div>
            </Link>
            </div>
            </>
        )
}



export default Listing;