let postUrl = 'https://jsonplaceholder.typicode.com/posts/';
let commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

const getPosts = () => fetch(postUrl).then(response=>response.json());

const postComment = (obj)=>{
    fetch(commentsUrl,
        {
            method: 'Post',
            body: JSON.stringify(obj),
            headers: {'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(respone=>respone.json())
        .then(result=>console.log(result))
}

export {getPosts,postComment};

