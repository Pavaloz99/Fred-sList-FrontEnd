import React, { Component } from 'react';
import PostModel from '../models/Posts';



class PostShow extends Component {
    state = {
        post: null,
        gotData: false,
    }


    componentDidMount = () => {
        this.fetchData(this.props.match.params.id);
    }

    fetchData =  (id) => {
         PostModel.fetchOne(id).then(res => {
            console.log(res)
            this.setState({
                post: res.data.post,
                gotData: true,
            });
        }).catch(err => {
            console.log(err);
        });
        console.log(this.state)
    }

    arrayBufferToBase64(buffer) {
        let binary = '';
        let bytes = [].slice.call(new Uint8Array(buffer));
            bytes.forEach((b) => binary += String.fromCharCode(b));
                return window.btoa(binary);
    };
    



    render(){
    return( 
            <div className="row">{this.state.gotData ? 
            <>
            <img src={"data:image/jpeg;base64," + this.arrayBufferToBase64(this.state.post.image.data)} alt="something"></img>
            <div className="item-info">
                <h2>Description:</h2>
                <p>{" " + this.state.post.description}</p>
                <h2>Asking:</h2>
                <p>{" " + this.state.post.asking}</p>
                <h2>Condition:</h2>
                <p>{" " + this.state.post.condition}</p>   
                </div> 
            </> :
             "Loading..."}
            
            </div>
    );
    }
}

export default PostShow;