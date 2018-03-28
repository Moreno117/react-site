import React, { Component } from "react";
import BlogContainer from './container/BlogContainer';
import Wrapper from './../common/wrapper/containers/wrapper';

class BlogModule extends Component{
    render(){
        return(
            <Wrapper>
                <BlogContainer />
            </Wrapper>
        );
    }
}

export default BlogModule;