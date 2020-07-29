import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-modal';
import PostModel from '../../models/Posts';
import Axios from 'axios';




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
      },
      button: {
          backgroundColor     : "blue"
      }
      
    };



Modal.setAppElement('body')

 

class UpdatePostModal extends Component {
    
    state = {
        show: false,
        title: "",
        description: "",
        condition: "",
        asking: "",
        category: "",
        image: null,
    }

    componentDidMount = () => {
        this.setState({
            title: this.props.post.title,
            description: this.props.post.description,
            condition: this.props.post.condition,
            asking: this.props.post.asking,
            category: this.props.post.category
        });
    }
    

    send = event => {
        const data = new FormData();
        data.append("title", this.state.title);
        data.append("description", this.state.description);
        data.append("condition", this.state.condition);
        data.append("asking", this.state.asking);
        data.append("category", this.state.category);
        data.append("image", this.state.image);
        
        PostModel.update(this.props.postId, data).then(res => {
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
            <button className="create" onClick={this.openModal}>Update Post</button>
        <Modal
          isOpen={this.state.show}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="CreatePost Form"
        >
          <h1>Update Post</h1>
          <form>
              <p>
                  <label htmlFor="title">Title</label>
                <input onKeyUp={this.onTitleInput} type="text" name="title" placeholder="Title" defaultValue={this.props.post.title} required />
              </p>
              <p>
                    <label htmlFor="description">Description</label>
                <textarea onChange={this.onDescriptionInput} name="description" placeholder="Description" defaultValue={this.props.post.description} rows="10" cols="10" required/>
              </p>
              <p>
                  <label htmlFor="condition">Condition</label>
                <input onKeyUp={this.onConditionInput} type="text" name="condition" placeholder="Condition" defaultValue={this.props.post.condition} required/>
              </p>
              <p>
                  <label htmlFor="asking">Asking</label>
                <input onKeyUp={this.onAskingInput} type="text" name="asking" placeholder="Asking" defaultValue={this.props.post.asking} required/>
              </p>
              <p>
                  <label htmlFor="category">Category</label>
                <select defaultValue={this.props.post.category} onChange={this.onCategoryInput} name="category">
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
              <p>
                  <label htmlFor="image">New Image</label>
                <input onChange={this.onImageInput} type="file" name="image" placeholder="Image" />
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


export default UpdatePostModal;