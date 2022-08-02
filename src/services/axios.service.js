import axios from "axios";
import {baseURL} from "./constants";
import {authService} from "./auth.service";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config)=>{
    const access = authService.getAccessToken();
    if(access){
        config.headers.Authorization = `Bearer ${access}`
    }
    return config;
})



export {apiService};