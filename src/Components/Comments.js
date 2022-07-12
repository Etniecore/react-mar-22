import React, {Component} from 'react';

import {ApiService, Comment} from "../Services";

class Comments extends Component {

    state ={comments:[]};

    constructor(props) {
        super(props);
        this.apiService = new ApiService();
        this.apiService.getComments().then(data=>this.setState({comments:data}))
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map((item,index)=>
                    <Comment
                    key={index}
                    item={item}/>)
                }
            </div>
        );
    }
}

export default Comments;