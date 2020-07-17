import React, { Component } from 'react';
import UserDetailMain from './UserDetailMain';
import CurrentUserList from './CurrentUserList';
import UserModel from '../models/User';


class UserDetails extends Component {

    state = {
        user: null,
    }

    componentDidMount = () => {
        this.fetchSingle();
    }
    
    fetchSingle = () => {
        UserModel.fetchSingle(this.props.accountId).then(data => {
            console.log(data);
            console.log(this.state)
            if(data){
            this.setState({
                user: data,
            });
        }}).catch(err => {
            console.log(err);
        });
    }
    
    arrayBufferToBase64(buffer) {
        let binary = '';
        let bytes = [].slice.call(new Uint8Array(buffer));
            bytes.forEach((b) => binary += String.fromCharCode(b));
                return window.btoa(binary);
    };
    
    
    render(){
        return(
            <>
            {   this.state.user ?
                <>
                <main className="main-listings main-listings-fix">
                <UserDetailMain bufferToBase64={this.arrayBufferToBase64} currentUser={this.state.user} />
                <CurrentUserList currentUser={this.state.user} bufferToBase64={this.arrayBufferToBase64} />
                </main>
                </>
                :
                "Loading"
            }
            </>
        )
    }
}

export default UserDetails;