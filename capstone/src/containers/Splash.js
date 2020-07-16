import React, { Component } from 'react';
import UserModel from '../models/User';
import Navbar from '../components/nav'
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
    fetchData = () => {
        console.log(this._isMounted);
        if(this._isMounted){
         UserModel.fetch().then(data => {
            console.log(data);
            console.log(this.state)
            if(data){
            this.setState({
                user: data,
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
            <Navbar isLoggedIn={this.state.auth} user={this.state.user} fetch={this.fetchData} logout={this.endSess}/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/listings" component={Listings} />
                <Route path="/profile/:id" render={props=> <Profile {...props} currentUser={this.state.user} />} />
                <Route path="/post/:id" render={props => <PostShow {...props}  currentUser={this.state.user} />} />
            </Switch>
            </>
        );
    }
}

export default Splash;
