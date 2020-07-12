import React from 'react';
import './nav.css'
import SignUpModal from '../components/modals/SignUpModal';
import LogInModal from './modals/LogInModal';
import {NavLink} from 'react-router-dom';

function Nav(props){
 
    return (
    <>
    <header>
        <nav>
        <div class="Auth-btn">
        {!props.isLoggedIn ? <> <LogInModal fetch={props.fetch}/> <SignUpModal /> </> : <><NavLink to="/">Home</NavLink><NavLink to={'/profile/' + props.user._id}>Account</NavLink> <button onClick={props.logout}>Logout</button></> }      
        </div>
        </nav>
    </header>
    </>
    )
}
export default Nav;