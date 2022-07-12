import React, {Component} from 'react';

class Post extends Component {

    constructor(props) {
        super(props);
        this.post = this.props.item;
    }
    render() {
        return (
            <div>
                <div>Post ID: {this.post.id}</div>
                <div>Post Title: {this.post.title}</div>
                <div>Content: {this.post.body}</div>
            </div>
        );
    }
}

export default Post;