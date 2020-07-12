import React, { Component } from 'react';
import UserModel from '../models/User';
import Nav from '../components/nav'

class Splash extends Component {
    _isMounted = false;
  state = {
      auth: false,
      user: null,
  }

  componentDidMount(){
      this._isMounted = true;
      console.log("hello")
  }
  componentDidUpdate(){
      console.log("hi");
  }
  componentWillUnmount(){
      console.log("hi")
      this._isMounted = false;
  }
    fetchData = async (e) => {
        e.preventDefault();
        console.log(this._isMounted);
        if(this._isMounted){
        await UserModel.fetch().then(res => {
            console.log(res);
            this.setState({
                user: res.data
            });
        }).catch(err => {
            console.log(err);
        });
        this.setState({
            auth: true
        });
    }
    }


    endSess = (e) => {
        e.preventDefault();
        UserModel.logout();
        this.setState({
            auth: false,
            user: null 
        });
        
    }
render() {
        return(
            <>
            <Nav isLoggedIn={this.state.auth} logout={this.endSess}/>
            <h1>test</h1>
            <button onClick={this.fetchData}>Grab Data</button>
        <h1> <b>{ this.state.auth ? `${this.state.user.username}` : 'hello'} </b> </h1>
            <button onClick={this.endSess}>endIt</button>
            </>
        );
    }
}

export default Splash;
