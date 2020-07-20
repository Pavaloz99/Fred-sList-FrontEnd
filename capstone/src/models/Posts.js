import axios from 'axios';

class PostModel {
    static fetch = () => {
        //let posts = axios.get('http://localhost:3001/api/v1/posts', {withCredentials: true});
        return fetch("http://localhost:3001/api/v1/posts", {
            credentials: "include",
            method: "GET"
        }).then(res => {
            return res.json();
        })
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
        // return fetch("http://localhost:3001/api/v1/posts", {
        //     credentials: "include",
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data),
        // }).then(res => {
        //     return res.json();
        // });
        return post;
    }

    static drop = (id) => {
        //let deletedPost = axios.delete("http://localhost:3001/api/v1/posts/" + id + "/delete", {withCredentials: true});
        return fetch("http://localhost:3001/api/v1/posts/" + id + "/delete", {
            credentials: "include",
            method: "DELETE"
        }).then(res => {
            res.json();
        });
    }

    static fetchByCategoryElectronics = () => {
        return fetch("http://localhost:3001/api/v1/posts/category/electronics", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }
    static fetchByCategoryHomeAndBath = () => {
        return fetch("http://localhost:3001/api/v1/posts/category/homeandbath", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }
    static fetchByCategoryToys = () => {
        return fetch("http://localhost:3001/api/v1/posts/category/toys", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }
    static fetchByCategoryClothing = () => {
        return fetch("http://localhost:3001/api/v1/posts/category/clothing", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }
    static fetchByCategoryBeautyAndHealth = () => {
        return fetch("http://localhost:3001/api/v1/posts/category/beautyandhealth", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }
    static fetchByCategoryPetSupplies = () => {
        return fetch("http://localhost:3001/api/v1/posts/category/petsupplies", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }

    static fetchByCategorySports = () => {
        return fetch("http://localhost:3001/api/v1/posts/category/sports", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }

    static fetchByCategoryHandmade = () => {
        return fetch("http://localhost:3001/api/v1/posts/category/handmade", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
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