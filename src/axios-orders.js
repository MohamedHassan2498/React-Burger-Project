import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bd314.firebaseio.com/'
});

export default instance;