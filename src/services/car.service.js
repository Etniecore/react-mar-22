import {apiService} from "./axios.service";
import {urls} from "./constants";

const carService = {
    getAll:()=> apiService.get(urls.cars),
    save:(obj)=> apiService.post(urls.cars, obj),
    delete:(id)=> apiService.delete(`${urls.cars}/${id}`),
    update:(id,obj)=> apiService.put(`${urls.cars}/${id}`,obj)
}

export {carService};