import React, { Component } from 'react';
import PostContainer from './containers/PostContainer';

class PostModule extends Component{
    render(){
        const { params } = this.props.match;
        return(
            <PostContainer id={ params.id } />
        );
    }
}

export default PostModule;

