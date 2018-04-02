import React,{ Component } from "react";
import { getPost } from './../../../api'
import { populate } from './../helpers/posts';

import ActionButton from './../components/actionButton';
import Slider from './../components/slider';
import Articles from './../components/articles';

class BlogContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            images: [],
            posts: []
        }
    }

    componentDidMount(){
        getPost(1, 3)
        .then(response =>  populate(response))
        .then(data => this.setState({ posts: data.docs, images: data.images }))
        .catch(err => {
            console.log(err)
        });
    };

    fetchMoreArticles(page, size){
        getPost(page, size)
        .then(response => populate(response))
        .then(data => this.setState({ posts: data.docs, images: data.images }))
        .catch(err => {
            console.log('err', err)
        })
    }

    render(){
        let { images, posts } = this.state;

        const articles = posts.map(post => {
            return <Articles post={post} key={post._id} />
        });

        return(
            <div className="columns is-fullheight">                
                
                <Slider images={ images }/>                
                
                <div className="column right-side is-half-desktop is-full-mobile">
                    <section className="hero is-fullheight is-default is-bold">
                        <div className="hero-body" id="hero-body-blog">
                            <div className="container">

                            { articles }

                            </div>
                        </div>
                    </section>
                    
                    <ActionButton callback={(p,s) => this.fetchMoreArticles(2,3)}/>

                </div>
            </div>
        );
    }
}

export default BlogContainer;