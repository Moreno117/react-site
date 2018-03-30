import React, { Component } from 'react';
import Post from './../components/post';
import { htmlParsed } from './../helpers';
import { showPost } from './../../../api';

class PostContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            content: '',
            post: ''
        }
    }

    componentDidMount(){
        showPost(this.props.id)
        .then(response => {
            const { content } = response.data;     
            const text = htmlParsed(content);
            this.setState({ post:response.data, content:text });
        })
        .catch(error => {
            console.log('err --->', error);
        })
    }

    render(){
        const { post, content } = this.state;

        return(
            <Post
                post={post} 
                content={content}
            />
        );
    }
}

export default PostContainer;