import axios from 'axios';

class PostModel {
    static fetch = () => {
        let posts = axios.get('http://localhost:3001/api/v1/posts', {withCredentials: true});
        return posts;
    }

    static fetchOne = (id) => {
        let post = axios.get("http://localhost:3001/api/v1/posts/" + id, {withCredentials: true});
        return post;
    }

    static create = (data) => {
        let post = axios.post("http://localhost:3001/api/v1/posts", data, {withCredentials: true});
        return post;
    }

    static drop = (id) => {
        let deletedPost = axios.delete("http://localhost:3001/api/v1/posts/" + id + "/delete", {withCredentials: true});
        return deletedPost;
    }
}

export default PostModel;