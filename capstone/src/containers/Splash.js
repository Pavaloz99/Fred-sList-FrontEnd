import React, { Component } from 'react';
import UserModel from '../models/User';
import Nav from '../components/nav'
import Home from './Home';
import Profile from './Profile';
import Listings from '../components/Listings'
import {Route, Switch} from 'react-router-dom';
import PostModel from '../models/Posts';
import PostShow from '../containers/PostShow';

class Splash extends Component {
    _isMounted = false;
  state = {
      auth: false,
      user: null,
  }



  componentDidMount(){
      this._isMounted = true;
      console.log("hello")
      this.fetchData();
      console.log(this.state)
  }


//   shouldComponentUpdate = (nextProps, nextState) => {
//       if(this.state.user === nextState.user){
//           return false
//       }
//       return true
//   }

//   componentDidUpdate = (prevProps, prevState) => {
//     if(this.state.user === null){
//         console.log('hello')
//       this.fetchData();
//     }
//   }


  componentWillUnmount(){
      console.log("hi")
      this._isMounted = false;
  }
    fetchData = async () => {
        console.log(this._isMounted);
        if(this._isMounted){
        await UserModel.fetch().then(res => {
            console.log(res.data);
            console.log(this.state)
            if(res.data){
            this.setState({
                user: res.data,
                auth: true
            });
        }
        }).catch(err => {
            console.log(err);
        });
    }
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.fetchData();
    }

    endSess = (e) => {
        e.preventDefault();
        UserModel.logout();
        this.setState({
            auth: false,
            user: null 
        });
        window.location.href = '/'
    }
render() {
        return(
            <>
            <Nav isLoggedIn={this.state.auth} user={this.state.user} fetch={this.fetchData} logout={this.endSess}/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/listings" component={Listings} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/post/:id" component={PostShow} />
            </Switch>
            </>
        );
    }
}

export default Splash;
