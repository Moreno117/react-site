import React, { Component } from "react";
import BlogContainer from './container/BlogContainer';
import Wrapper from './../common/wrapper/containers/wrapper';
import { getPost } from './../../api'

class BlogModule extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        getPost(1, 3)
        .then(response => {
            const { docs } = response.data;
            this.setState({ posts: docs });
        })
        .catch(err => {
            console.log(err)
        });
    };

    fetchMoreArticles(page, size){
        getPost(page, size)
        .then(res => {
            console.log('fetch', res)
        })
        .catch(err => {
            console.log('err', err)
        })
    }

    render(){
        const { posts } = this.state;
        return(
            <Wrapper>
                <BlogContainer 
                    posts={ posts }
                    loadMore={(p, s) => this.fetchMoreArticles(p,s) }  
                />
            </Wrapper>
        );
    }
}

export default BlogModule;