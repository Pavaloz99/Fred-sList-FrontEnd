import axios from 'axios';

class PostModel {
    static fetch = () => {
        let posts = axios.get('http://localhost:3001/api/v1/posts');
        return posts;
    }

    static fetchOne = (id) => {
        let post = axios.get("http://localhost:3001/api/v1/posts/" + id);
        return post;
    }

    static create = (data) => {
        let post = axios.post("http://localhost:3001/api/v1/posts", data, {withCredentials: true});
        return post;
    }
}

export default PostModel;