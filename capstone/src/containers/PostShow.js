import React, { Component } from 'react';
import PostModel from '../models/Posts';
import DeleteConfModal from '../components/modals/DeleteConfModal';
import UserModel from '../models/User';
import './PostShow.css';



class PostShow extends Component {

    state = {
        post: null,
        gotData: false,
    }


    componentDidMount = () => {
        this.fetchData(this.props.match.params.id);
    }

    fetchData = (id) => {
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
    
    handleDelete = (id) => {
        PostModel.drop(id).then(res => {
            console.log(res);
            this.props.history.push('/listings');
        }).catch(err => {
            console.log(err);
        });
      }
    
      handleSubmitPositive = (e) => {
          e.preventDefault();
          UserModel.addLike(this.state.post.User._id).then(res => {
              console.log(res);
          }).catch(err => {
              console.log(err);
          });
        }
        handleSubmitNegative = (e) => {
            e.preventDefault();
            UserModel.addDislike(this.state.post.User._id).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
          }



    render(){
    return( // split this return into two components maybe three
            <main>{this.state.gotData ? 
            <>
            <h1>{this.state.post.title}</h1>
            <div className="row-info">
                    <img src={"data:image/jpeg;base64," + this.arrayBufferToBase64(this.state.post.image.data)} alt="something"></img>
                <div className="item-info">
                    <h2>Description:</h2>
                    <p>{" " + this.state.post.description}</p>
                    <h2>Asking:</h2>
                    <p>{" " + this.state.post.asking}</p>
                    <h2>Condition:</h2>
                    <p>{" " + this.state.post.condition}</p>  
                    <DeleteConfModal handleDelete={this.handleDelete} id={this.props.match.params.id} /> 
                    </div> 
            </div>
            <div className="row-user-more">
                <div className="user">
                <h3>Username: {" " + this.state.post.User.username}</h3>
                <h3>Rating: {this.state.post.User.Rating.length ? 
                        (this.state.post.User.Rating.reduce((accumulator, currentValue) => 
                        accumulator + currentValue)/this.state.post.User.Rating.length)*100 + "%" :
                         "0%"} </h3>
                <h3>Location: </h3>
                <h3>Followers: {" " + this.state.post.User.Followers.length}</h3>
                <input type="submit" value="Positive" onClick={this.handleSubmitPositive} />
                <input type="submit" value="Negative" onClick={this.handleSubmitNegative} />
                <button>Follow</button>
                </div>
                <div className="carausel">

                </div>
            </div>
            </> :
             "Loading..."}
            </main>
    );
    }
}

export default PostShow;