import React, { Component } from 'react';
import Wrapper  from './../common/wrapper/containers/wrapper';
import PostContainer from './containers/PostContainer';

class PostModule extends Component{
    render(){
        const { params } = this.props.match;
        return(
            <Wrapper>
                <PostContainer id={ params.id } />
            </Wrapper>
        );
    }
}

export default PostModule;

