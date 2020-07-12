import axios from 'axios';

class PostModel {
    static fetch = () => {
        let posts = axios.get('http://localhost:3001/api/v1/posts');
        return posts;
    }
}

export default PostModel;