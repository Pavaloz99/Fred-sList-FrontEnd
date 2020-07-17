import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';
import PostModel from '../../models/Posts';



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

 

class DeleteConfModal extends Component {
    
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
    
      handleDeleteButton = () => {
       this.props.handleDelete(this.props.id);
       this.closeModal();
      }
    
    render(){
      
        return(
            <>
        <button className="delete-btn" onClick={this.openModal}>Delete Post</button>
        <Modal
          isOpen={this.state.show}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="SignUp Form"
        >
        <h1>Are You Sure You Want To Delete This Post</h1>
        <form>
            <button onClick={this.handleDeleteButton}>Yes, Delete</button>
            <button onClick={this.closeModal}>No</button>
        </form>
        </Modal>
        </>
        );
    }
}


export default DeleteConfModal;