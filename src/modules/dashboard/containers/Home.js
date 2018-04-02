import React, { Component } from 'react';
import Card from './../components/posts/card';
import { getPost, removePost } from './../../../api';

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts: [],
            removeSuccess: false
        }
    }
    
    componentDidMount(){
        getPost(1,20)
        .then(response => this.setState({ posts: response.data.docs }))
        .catch(error => console.log('err --->', error))
    }

    erasePost(id){
        removePost(id)
        .then(response => {
            setTimeout(() => {
                let { posts } = this.state;
                let postSanitazed = posts.filter(post => post._id !== id);                                
                this.setState({ removeSuccess: true, posts: postSanitazed });
            }, 1000);
        })
        .catch(error => {
            console.log('not erased', error);
        });
    }

    render(){
        const cards = this.state.posts.map(post => {
            return (
                <Card 
                    post={post}
                    key={post._id}
                    deletePost={ (id) => this.erasePost(post._id) }
                />
            );
        })

        return(
            <div style={{ display:'flex', flexWrap:'wrap' }}>
                { cards }
            </div>
        );
    }
}

export default Home;