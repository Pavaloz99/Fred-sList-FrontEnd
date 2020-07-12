import React from 'react';
import './nav.css'
import SignUpModal from '../components/modals/SignUpModal';
import LogInModal from './modals/LogInModal';

function Nav(props){
 
    return (
    <>
    <header>
        <nav>
        <div class="Auth-btn">
        {!props.isLoggedIn ? <> <LogInModal /> <SignUpModal /> </> : <button onClick={props.logout}>Logout</button> }      
        </div>
        </nav>
    </header>
    </>
    )
}
export default Nav;