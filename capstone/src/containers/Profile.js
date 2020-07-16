import React from 'react';
import UserDetails from '../components/UserDetails';


function Profile(props) {
    return <UserDetails accountId={props.match.params.id} currentUser={props.currentUser} />
}

export default Profile;