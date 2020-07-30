import axios from 'axios';

const API_ENDPOINT = "https://afternoon-reef-89142.herokuapp.com/api/v1/"

class PostModel {
    static fetch = () => {
        //let posts = axios.get('http://localhost:3001/api/v1/posts', {withCredentials: true});
        return fetch(API_ENDPOINT + "posts", {
            credentials: "include",
            method: "GET"
        }).then(res => {
            return res.json();
        })
    }

    static fetchOne = (id) => {
        //let post = axios.get("http://localhost:3001/api/v1/posts/" + id, {withCredentials: true});
        return fetch(API_ENDPOINT + "posts/" + id, {
            credentials: "include",
            method: "GET"
        }).then(res => {
           return res.json();
        });
    }

    static create = (data) => {
        let post = axios.post(API_ENDPOINT + "posts", data, {withCredentials: true});
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
        return fetch(API_ENDPOINT + "posts/" + id + "/delete", {
            credentials: "include",
            method: "DELETE"
        }).then(res => {
            res.json();
        });
    }

    static fetchByCategoryElectronics = () => {
        return fetch(API_ENDPOINT + "posts/category/electronics", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }
    static fetchByCategoryHomeAndBath = () => {
        return fetch(API_ENDPOINT + "posts/category/homeandbath", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }
    static fetchByCategoryToys = () => {
        return fetch(API_ENDPOINT + "posts/category/toys", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }
    static fetchByCategoryClothing = () => {
        return fetch(API_ENDPOINT + "posts/category/clothing", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }
    static fetchByCategoryBeautyAndHealth = () => {
        return fetch(API_ENDPOINT + "posts/category/beautyandhealth", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }
    static fetchByCategoryPetSupplies = () => {
        return fetch(API_ENDPOINT + "posts/category/petsupplies", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }

    static fetchByCategorySports = () => {
        return fetch(API_ENDPOINT + "posts/category/sports", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }

    static fetchByCategoryHandmade = () => {
        return fetch(API_ENDPOINT + "posts/category/handmade", {
            credentials: "include",
            method: "GET",
        }).then(res => {
            return res.json();
        });
    }

    static update = (id, data) => {
        return fetch(API_ENDPOINT + "posts/" + id, {
            credentials: "include",
            method: "PUT",
            body: data  
        }).then(res => {
            return res.json();
        })
    }
}

export default PostModel;