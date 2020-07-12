import axios from 'axios';

class UserModel {
    static register = (userInfo) => {
        axios.post('http://localhost:3001/api/v1/auth/register', userInfo)
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }

    static login = (loginInfo) => {
        axios.post('http://localhost:3001/api/v1/auth/login', loginInfo, {withCredentials: true})
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    } 

    static fetch = async () => {
        let account = await axios.get('http://localhost:3001/api/v1/auth', {withCredentials: true})
        return account;
    }
    static logout = () => {
        let request = axios.delete('http://localhost:3001/api/v1/auth/logout', {withCredentials: true})
    }
}

export default UserModel;