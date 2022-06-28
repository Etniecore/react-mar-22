import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const getPosts = () => axiosInstance.get('/posts').then(response=>response);
const getUserPost = (id) => axiosInstance.get('user/' + id +'/posts').then(response=>response);

export {getPosts,getUserPost};