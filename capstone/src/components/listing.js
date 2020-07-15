import React, {Component} from 'react';
import {Link} from 'react-router-dom'


import './listing.css';

function Listing(props) { 
        return(
            <>
            <hr/>
            <Link to ={"/post/" + props.id}>
            <div className="listing">  
                <div className="container">
                    <div>
                        <h1>Title: {props.name}</h1>
                        <h2>Condition: {props.condition}</h2>
                        <h2>Asking: {props.price}</h2>
                        <h2>Seller: {props.user}</h2>
                        <h2>Rating: {props.rating}</h2>
                    </div>
                    <div className="img-container">
                        <img src={"data:image/jpeg;base64," + props.img} alt="Something"/>
                    </div>
                </div>
            </div>
            </Link>
            <hr/>
            </>
        )
}



export default Listing;