 const baseURL = 'https://jsonplaceholder.typicode.com/';

const apiService={
    todos: ()=> fetch(baseURL+'todos'),
    albums: ()=> fetch(baseURL + 'albums'),
    comments: ()=> fetch( baseURL + 'comments'),
    post:(id)=> fetch( baseURL+'post/'+ id + '/comments'),
}

export {apiService}