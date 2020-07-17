import axios from 'axios';

class PostModel {
    static fetch = () => {
        let posts = axios.get('http://localhost:3001/api/v1/posts', {withCredentials: true});
        return posts;
    }

    static fetchOne = (id) => {
        //let post = axios.get("http://localhost:3001/api/v1/posts/" + id, {withCredentials: true});
        return fetch("http://localhost:3001/api/v1/posts/" + id, {
            credentials: "include",
            method: "GET"
        }).then(res => {
           return res.json();
        });
    }

    static create = (data) => {
        let post = axios.post("http://localhost:3001/api/v1/posts", data, {withCredentials: true});
        return post;
    }

    static drop = (id) => {
        let deletedPost = axios.delete("http://localhost:3001/api/v1/posts/" + id + "/delete", {withCredentials: true});
        return deletedPost;
    }
    static fetchByCategory = (data) => {
        return fetch("http://localhost:3001/api/v1/posts/category", {
            credentials: "include",
            method: "GET",
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data),
        }).then(res => {
            res.json();
        });
    }

    static update = (id, data) => {
        return fetch("http://localhost:3001/api/v1/posts/" + id, {
            credentials: "include",
            method: "PUT",
            body: data  
        }).then(res => {
            return res.json();
        })
    }
}

export default PostModel;