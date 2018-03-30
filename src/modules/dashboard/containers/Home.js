import React, { Component } from 'react';
import Card from './../components/card';
import { getPost } from './../../../api';

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
    }
    
    componentDidMount(){
        getPost(1,20)
        .then(response => this.setState({ posts: response.data.docs }))
        .catch(error => console.log('err --->', error))
    }

    render(){
        const cards = this.state.posts.map(post => {
            return (
                <Card 
                    post={post}
                    key={post._id}
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