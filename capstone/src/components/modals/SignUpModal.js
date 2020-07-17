import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';
import UserModel from '../../models/User';



const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#5b5656',
    color                 : '#f5eaea',
    display               : "block",
  },
  overlay: {
    backgroundColor       : "rgba(0, 0, 0, 0.75)",
    zIndex                : "101"
  }
  
};



Modal.setAppElement('body')

 

class SignUpModal extends Component {
    
    state = {
        show: false,
        email: "",
        username: "",
        password: ""
    }
    
    

    sendData = (userData) => {
        UserModel.register(userData)
    }

    openModal = () => {
        this.setState({
            show: true
        })
      }
     
     
    closeModal = () => {
        this.setState({
            show: false
        });
      }
    
    onUsernameInput = (event) => {
        this.setState({
            username: event.target.value,
        })
    }
    onEmailInput = (event) => {
        this.setState({
            email: event.target.value,
        })
    }
    onPasswordInput = (event) => {
        this.setState({
            password: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.sendData({
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        })
        this.closeModal();
    }
    
    
    render(){
      
        return(
            <>
        <ul>
            <li>
                <a onClick={this.openModal} href="#">SignUp</a>
            </li>
        </ul>
        <Modal
          isOpen={this.state.show}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="SignUp Form"
        >
          <h1>Register</h1>
          <form method="POST">
              <p>
                  <p>
                  <label htmlFor="email">Email</label>
                  </p>
                <input onKeyUp={this.onEmailInput} type="email" name="email" placeholder="Email" required />
              </p>
              <p>
                  <p>
                    <label htmlFor="username">Username</label>
                  </p>
                <input onKeyUp={this.onUsernameInput} type="text" name="username" placeholder="Username" required/>
              </p>
              <p>
                  <p>
                  <label htmlFor="password">Password</label>
                  </p>
                <input onKeyUp={this.onPasswordInput} type="password" name="password" placeholder="Password" required/>
              </p>
              <p>
                <input onClick={this.handleSubmit} type="submit" value="Register"/>
              </p>
          </form>
        </Modal>
        </>
        );
    }
}


export default SignUpModal;