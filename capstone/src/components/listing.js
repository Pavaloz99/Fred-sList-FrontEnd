import React, {Component} from 'react';


function Listing(props) { 
        return(
            <div className="Listing">
                <hr/>
                <h1>Title: {props.name}</h1>
                <h2>Condition: {props.condition}</h2>
                <h2>Asking: {props.price}</h2>
                <hr/>
            </div>
        )
}



export default Listing;