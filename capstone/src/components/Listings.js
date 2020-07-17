import React, { Component } from 'react';
import Listing from './listing';
import PostModel from '../models/Posts';
import CreatePostModal from './modals/CreatePostModal';
import {Link} from 'react-router-dom';
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
                        Math.round((post.User.Rating.reduce((accumulator, currentValue) => 
                        accumulator + currentValue)/post.User.Rating.length)*100) + "%" :
                         "0%"} 
                         img={this.arrayBufferToBase64(post.image.data)}/>
            })
    }
render(){
return (
    <>
    
    <main className="main-listings">
        <div className="left-col">
            <p>
                <Link to={"/"}><button>Home</button></Link>
            </p>
            <p>
                <button>Electronics</button>
            </p>
            <p> 
                <button>Home And Bath</button>
            </p>
            <p>
                <button>Clothing</button>
            </p>
            <p>
                <button>Pet Supplies</button>
            </p>
            <p>
                <button>Beauty And Supplies</button>
            </p>
            <p> 
                <button>Toys</button>
            </p>
            <p>
                <button>Handmade</button>
            </p>
            <p>
                <button>Sports</button>
            </p>
         </div>
    <div className="list-container">{this.generateLists(this.state.allPosts)}</div><div className="right-col"><CreatePostModal fetchPosts={this.fetchPosts}/></div></main> 
 </>
);
}
}

export default Listings;