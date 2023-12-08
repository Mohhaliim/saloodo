import http from '../http-common';

class userServices {
    register(user) {
        return http.post('/user/register', user);
    }

    login(user) {
        return http.post('/user/login', user);
    }

    getUser(id) {
        return http.post('/user/getUser', id);
    }

    delete(id) {
        return http.post('/user/delete', id)
    }
}

export default new userServices();
