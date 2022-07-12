import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.comment = this.props.item;

    }
    render() {
        return (
            <div>
                <div>ID: {this.comment.id}</div>
                <div>Name: {this.comment.name}</div>
                <div>Body: {this.comment.body}</div>

            </div>
        );
    }
}

export default Comment;