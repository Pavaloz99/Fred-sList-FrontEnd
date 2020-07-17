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
    
    updatePostsListElectronics = (e) => {
        console.log(e.target.value)
        PostModel.fetchByCategoryElectronics().then(res => {
            console.log(res)
            this.setState({
                allPosts: res.post
            })
            }).catch(err => {
                console.log(err);
        });
    }

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
                <button onClick={this.updatePostsListElectronics} value="Electronics">Electronics</button>
            </p>
            <p> 
                <button onClick={this.updatePostsList} value="Home And Bath">Home And Bath</button>
            </p>
            <p>
                <button onClick={this.updatePostsList} value="Clothing">Clothing</button>
            </p>
            <p>
                <button onClick={this.updatePostsList} value="Pet Supplies">Pet Supplies</button>
            </p>
            <p>
                <button onClick={this.updatePostsList} value="Beauty And Supplies">Beauty And Supplies</button>
            </p>
            <p> 
                <button onClick={this.updatePostsList} value="Toys">Toys</button>
            </p>
            <p>
                <button onClick={this.updatePostsList} value="Handmade">Handmade</button>
            </p>
            <p>
                <button onClick={this.updatePostsList} value="Sports">Sports</button>
            </p>
         </div>
    <div className="list-container">{this.generateLists(this.state.allPosts)}</div><div className="right-col">
        <p>
            <CreatePostModal fetchPosts={this.fetchPosts}/>
        </p></div></main> 
 </>
);
}
}

export default Listings;