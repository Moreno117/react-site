import React,{ Component } from "react";
import { isEqual } from 'lodash';

import ActionButton from './../components/actionButton';
import Slider from './../components/slider';
import Articles from './../components/articles';

class BlogContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            images: []
        }
    }

    componentWillReceiveProps(nextProps){
        let images = [];
        if(!isEqual(nextProps.posts, this.props.posts)){
            nextProps.posts.forEach(post => {
                images.push(post.image);
            });
            this.setState({ images: images });
        }
    }

    render(){
        const { posts, loadMore } = this.props;
        const articles = posts.map(post => {
            return <Articles post={post} key={post._id} />
        });

        console.log(this.state)

        return(
            <div className="columns is-fullheight">                
                
                <Slider/>                
                
                <div className="column right-side is-half-desktop is-full-mobile">
                    <section className="hero is-fullheight is-default is-bold">
                        <div className="hero-body" id="hero-body-blog">
                            <div className="container">

                            { articles }

                            </div>
                        </div>
                    </section>
                    
                    <ActionButton callback={loadMore}/>

                </div>
            </div>
        );
    }
}

export default BlogContainer;