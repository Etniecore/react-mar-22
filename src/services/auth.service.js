import {apiService} from "./axios.service";
import {urls} from "./constants";

const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';

const authService = {
    login: (user)=>apiService.post(urls.auth, user),

    register: (user)=>apiService.post(urls.users,user),

    refresh:(token)=>apiService.post(`${urls.auth}/refresh`,{refresh:token}),

    saveTokens: ({access, refresh}) => {
        localStorage.setItem(accessTokenKey, access);
        localStorage.setItem(refreshTokenKey, refresh)
    },

    deleteTokens:()=>{
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey);
    },

    getAccessToken: ()=> localStorage.getItem(accessTokenKey),

    getRefreshToken: ()=> localStorage.getItem(refreshTokenKey)
}

export {authService};