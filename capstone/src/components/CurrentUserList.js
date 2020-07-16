import React, { Component } from 'react';
import Listing from './listing'




class CurrentUserList extends Component {   
    
    generateLists (posts, user) {
        return posts.map(post => {
           return <Listing name={post.title} fetchPosts={this.fetchPosts} id={post._id} condition={post.condition} price={post.asking} 
                   user={user ? user.username : "secret"} 
                   rating={user.Rating.length ? 
                       (user.Rating.reduce((accumulator, currentValue) => 
                       accumulator + currentValue)/user.Rating.length)*100 + "%" :
                        "0%"} 
                        img={post.User ? this.props.bufferToBase64(post.image.data) : "..."}/>
           })
    }
    
    render(){
        return(
            <>
            <div className="vertical-bar"></div><div>{this.props.currentUser ? this.generateLists(this.props.currentUser.Posts, this.props.currentUser) : "..."}</div><div className="vertical-bar"></div>
            </>
        )
    }
} 

export default CurrentUserList;