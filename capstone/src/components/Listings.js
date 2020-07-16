import React, { Component } from 'react';
import Listing from './listing';
import PostModel from '../models/Posts';
import CreatePostModal from './modals/CreatePostModal';
import './listings.css'

class Listings extends Component {

    state = {
        allPosts: [],
    }

    componentDidMount = () => {
        this.fetchPosts();
        console.log(this.state);
    }


    fetchPosts = () => {
        PostModel.fetch().then(res => {
            console.log(res);
            this.setState({
                allPosts: res.data.posts
            });
        }).catch(err => {
            console.log(err);
        });
    }
    arrayBufferToBase64(buffer) {
        let binary = '';
        let bytes = [].slice.call(new Uint8Array(buffer));
            bytes.forEach((b) => binary += String.fromCharCode(b));
                return window.btoa(binary);
    };
    
    

    generateLists (posts) {
         return posts.map(post => {
            return <Listing name={post.title} fetchPosts={this.fetchPosts} id={post._id} condition={post.condition} price={post.asking} 
                    user={post.User ? post.User.username : "secret"} 
                    rating={post.User.Rating.length ? 
                        (post.User.Rating.reduce((accumulator, currentValue) => 
                        accumulator + currentValue)/post.User.Rating.length)*100 + "%" :
                         "0%"} 
                         img={this.arrayBufferToBase64(post.image.data)}/>
            })
    }
render(){
return (
    <>
    
    <main><div className="left-col"><button>Hello</button></div><div className="list-container">{this.generateLists(this.state.allPosts)}</div><div className="right-col"><CreatePostModal fetchPosts={this.fetchPosts}/></div></main> 
 </>
);
}
}

export default Listings;