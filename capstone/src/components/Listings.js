import React, { Component } from 'react';
import Listing from './listing';
import PostModel from '../models/Posts';

class Listings extends Component {

    state = {
        allPosts: []
    }

    componentDidMount = async () => {
        await this.fetchPosts();
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

    generateLists(posts) {
        return posts.map(post => {
            return <Listing name={post.title} condition={post.Condition} price={post.Asking} />
        })
    }
render(){
return (
 <div>{this.generateLists(this.state.allPosts)}</div> 
);
}
}

export default Listings;