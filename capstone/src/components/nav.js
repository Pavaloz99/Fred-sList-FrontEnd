import React from 'react';
import './nav.css'
import SignUpModal from '../components/modals/SignUpModal';
import LogInModal from './modals/LogInModal';
import {NavLink} from 'react-router-dom';
import CreatePostModal from '../components/modals/CreatePostModal'

function Nav(props){
 
    return (
    <>
    <header>
        <nav>
        {!props.isLoggedIn ? 
        <> <ul className="left-side"><NavLink to="/listings">Home</NavLink></ul><div className="search"><form><input type="text" name="search" placeholder="Search"/><input type="submit" value="Search"/></form></div><div className="auth-btn"><LogInModal fetch={props.fetch}/> <SignUpModal /></div></> : 
        <> <ul className="left-side"><NavLink to="/listings">Home</NavLink></ul><div className="search"><form><input type="text" name="search" placeholder="Search"/><input type="submit" value="Search"/></form></div><ul className="right-side"><NavLink to={'/profile/' + props.user._id}>Account</NavLink> <a href="#" onClick={props.logout}>Logout</a></ul></> }      
        </nav>
    </header>
    </>
    )
}
export default Nav;