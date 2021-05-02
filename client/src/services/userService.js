const axios = require('axios')

class UserService {
    constructor() {
        this.axios = axios;
        this.base_url = 'http://localhost:3000/api';
    }
    createUser(payload) {
        const URL = `${this.base_url}/user`;
        return this.axios({
            method: 'post',
            url: URL,
            data: payload
        }).then((response) => {
            return response.data;
        }, (error) => {
            return error.response.data;
        });
    }
}

export default new UserService;