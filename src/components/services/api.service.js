import axios from "axios";
import {baseURL,urls} from "./index";

const axiosInstance = axios.create({baseURL});

const apiService = {
    getAll: ()=>axiosInstance.get(urls.car),
    save: (obj)=>axiosInstance.post(urls.car, obj),
    edit: (id, obj)=>axiosInstance.put(`${urls.car}/${id}`, obj),
    remove: (id)=>axiosInstance.delete(`${urls.car}/${id}`)
}

export {apiService};


