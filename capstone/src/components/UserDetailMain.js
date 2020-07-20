import React from 'react';
import './UserDetails.css';

const UserDetailMain = (props) => {
    return(
    <>
    <div className="profile-card">
        <div className="will-be-img"></div>
        <div className="user-info">
            <h1 className="greeting">Welcome {props.currentUser ? " " + props.currentUser.username : "..." }</h1>
            <h4>Member Since: A date</h4>
            <div className="stats">
                <div className="data-container">
                <span>Total Listing</span>
                <p className="stats-num">...</p>
                </div>
                <div className="data-container">
                <span>Active Listings</span>    
                <p className="stats-num">{props.currentUser ? props.currentUser.Posts.length : "..."}</p>
                </div>
                <div className="data-container">
                <span>Your Rating</span>
                <p className="stats-num">{props.currentUser ? 
                props.currentUser.Rating.length ?
                Math.round((props.currentUser.Rating.reduce((accumulator, currentValue) => 
            accumulator + currentValue)/props.currentUser.Rating.length)*100) + "%" :
             "0%" : ""}
              </p>
                </div>
                <div className="data-container">
                <span>Followers</span>
                <p className="stats-num">{props.currentUser ? 
                props.currentUser.Followers.length :
                "0"}</p>
                </div>
                <div className="data-container">
                <span>Following</span>
                <p className="stats-num">{props.currentUser ?
                props.currentUser.Following.length :
                "0"}</p>
                </div>
            </div>
        </div>
    </div>
</>
    )
}

export default UserDetailMain;