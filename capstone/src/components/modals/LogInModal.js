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
      transform             : 'translate(-50%, -50%)'
    }
  };



Modal.setAppElement('body')

 

class SignUpModal extends Component {
    
    state = {
        show: false,
        email: "",
        password: ""
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

    handleSubmit = async (event) => {
        event.preventDefault();
        await UserModel.login({
            email: this.state.email,
            password: this.state.password
        })
        this.closeModal();
        await this.props.fetch();
        console.log(this.props.fetch())
    }

    
    
    render(){
      
        return(
            <>
        <ul>
            <li>
                <a onClick={this.openModal} href="#">Login</a>
            </li>
        </ul>
        <Modal
          isOpen={this.state.show}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="SignUp Form"
        >
          <h1>Login</h1>
          <form method="POST">
                  <p>
                  <label htmlFor="email">Email</label>
                  </p>
                  <p>
                <input onKeyUp={this.onEmailInput} type="email" name="email" placeholder="Email" required />
              </p>
                  <p>
                  <label htmlFor="password">Password</label>
                  </p>
                  <p>
                <input onKeyUp={this.onPasswordInput} type="password" name="password" placeholder="Password" required/>
              </p>
              <p>
                <input onClick={this.handleSubmit} type="submit" value="Login"/>
              </p>
          </form>
        </Modal>
        </>
        );
    }
}


export default SignUpModal;