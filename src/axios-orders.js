import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-fcc20.firebaseio.com/',
});

export default instance;