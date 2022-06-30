const saveUser = (obj)=>{
    fetch('http://jsonplaceholder.typicode.com/users',
        {
            method: 'Post',
            body: JSON.stringify(obj),
            headers: {
                'Content-type':'application/json; charset=UTF-8'
            }
        })
        .then(response=>response.json())
        .then(result=>console.log(result))
}
export {saveUser};