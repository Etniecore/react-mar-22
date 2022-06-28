import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

const getUsers = ()=> axiosInstance.get('users').then(response=>response);
const getUser = (id)=> axiosInstance.get('users/'+id).then(response=>response);

export {getUsers,getUser}