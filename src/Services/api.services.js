let baseURL = 'https://jsonplaceholder.typicode.com';

let ApiService = {
    getPosts: ()=>{
        return fetch(baseURL + '/posts')
            .then(response=>response.json())
    }
}

export {ApiService};