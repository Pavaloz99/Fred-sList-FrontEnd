import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';
import PostModel from '../../models/Posts';
import Axios from 'axios';
import './PostModal.css';




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

 

class CreatePostModal extends Component {
    
    state = {
        show: false,
        title: "",
        description: "",
        condition: "",
        asking: "",
        category: "",
        image: null,
    }
    

    send = event => {
        const data = new FormData();
        data.append("title", this.state.title);
        data.append("description", this.state.description);
        data.append("condition", this.state.condition);
        data.append("asking", this.state.asking);
        data.append("category", this.state.category);
        data.append("image", this.state.image);
        
        PostModel.create(data).then(res => {
          this.props.fetchPosts();
          console.log(res)
        }).catch(err => console.log(err))
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

      onTitleInput = (event) => {
        this.setState({
            title: event.target.value,
        });
      }

      onDescriptionInput = (event) => {
        this.setState({
            description: event.target.value,
        });
      }
    
      onConditionInput = (event) => {
        this.setState({
            condition: event.target.value,
        });
      }
    
      onAskingInput = (event) => {
        this.setState({
            asking: event.target.value,
        });
      }
    
      onCategoryInput = (event) => {
        this.setState({
            category: event.target.value,
        });
      }
    
      onImageInput = (event) => {
        this.setState({
            image: event.target.files[0],
        });
      }

      handleSubmit = (e) => {
        e.preventDefault();
        this.send();
        this.closeModal();
      }

    
    
    render(){

     
        return(
            <>
            <button className="create" onClick={this.openModal}>Create Post</button>
        <Modal
          isOpen={this.state.show}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="CreatePost Form"
        >
          <h1>Create Post</h1>
          <form>
              <p>
                  <label htmlFor="title">Title</label>
                  <p>
                <input onKeyUp={this.onTitleInput} type="text" name="title" placeholder="Title" required />
                </p>             
              </p>
              <p>
                    <label htmlFor="description">Description</label>
                    <p>
                <textarea onKeyUp={this.onDescriptionInput} name="description" placeholder="Description" rows="6" cols="50" required/>
             </p>
              </p>
              <p>
                  <label htmlFor="condition">Condition</label>
                  <p>
                <input onKeyUp={this.onConditionInput} type="text" name="condition" placeholder="Condition" required/>
                </p>            
              </p>
              <p>
                  <label htmlFor="asking">Asking</label>
                  <p>
                <input onKeyUp={this.onAskingInput} type="text" name="asking" placeholder="Asking" required/>
                </p>              
              </p>
              <p>
                  <label htmlFor="category">Category</label>
                  <p>
                <select onChange={this.onCategoryInput} name="category">
                  <option value="">-- Select Category --</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Home And Bath">Home And Bath</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Pet Supplies">Pet Supplies</option>
                  <option value="Beauty And Health">Beauty And Health</option>
                  <option value="Toys">Toys</option>
                  <option value="Handmade">Handmade</option>
                  <option value="Sports">Sports</option>
                </select>
                </p>
              </p>
              <p>
                  <label htmlFor="image">Image</label>
                  <p>
                <input onChange={this.onImageInput} type="file" name="image" placeholder="Image" required/>
                </p>
              </p>
              <p>
                <input onClick={this.handleSubmit} type="submit" value="Post"/>
              </p>
          </form>
        </Modal>
        </>
        );
    }
}


export default CreatePostModal;