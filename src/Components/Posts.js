import React, {Component} from 'react';

import {ApiService, Post} from "../Services";


class Posts extends Component {
    state = {posts:[]};

componentDidMount() {
    ApiService.getPosts().then(data=>this.setState({posts:data}))
}

    render() {
        return (
            <div>
                {this.state.posts.map((post,index)=>
                    <Post
                    key={index}
                    item={post}/>
                )}
            </div>
        );
    }
}

export default Posts;