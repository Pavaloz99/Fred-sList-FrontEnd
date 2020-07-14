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
    
    
    render(){
      
        return(
            <>
        <button onClick={this.openModal}>Delete Post</button>
        <Modal
          isOpen={this.state.show}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="SignUp Form"
        >
          <h1>Are You Sure You Want To Delete This Post</h1>
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