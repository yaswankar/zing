const axios = require('axios')

class ChannelService {
    constructor() {
        this.axios = axios;
        this.base_url = 'http://localhost:3000/api';
    }
    getChannels() {
        const URL = `${this.base_url}/channel`;
        return this.axios({
            method: 'get',
            url: URL
        }).then((response) => {
            return response.data;
        }, (error) => {
            return error.response.data;
        });
    }
}

export default new ChannelService;