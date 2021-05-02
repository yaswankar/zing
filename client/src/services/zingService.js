import userService from './userService';
import channelService from './channelService';

class ZingService {
    constructor() {
        this.User = userService;
        this.Channel = channelService;
    }
}

export default new ZingService;