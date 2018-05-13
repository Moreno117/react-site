import React,{ Component } from "react";
import { getPost } from './../../../api'
import { populate } from './../helpers/posts';

import ActionButton from './../components/actionButton';
import Slider from './../components/slider';
import Articles from './../components/articles';
import { Spinner } from "../../common/spinner/spinner";

class BlogContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            images: [],
            posts: [],
            page: '',
            pages: '',
            nextPage: '',
            loading: false
        }
    }

    componentDidMount(){
        this.setState({ loading: true });
        getPost(1, 3)
        .then(response =>  populate(response))        
        .then(data => {            
            const { page, pages, docs:posts, images, nextPage } = data;
            this.setState({ posts, images, page, pages, nextPage, loading:false })
        })
        .catch(err => {
            console.log(err)
        });
    };

    fetchMoreArticles(page, size){
        getPost(page, size)
        .then(response => populate(response))
        .then(data => {
            const { pages, nextPage } = this.state;
            const { docs:posts, images, page } = data;
            let next = page === pages ? 1 : nextPage + 1;            
            this.setState({ page, posts, images, nextPage: next })
        })
        .catch(err => {
            console.log('err', err)
        })
    }

    render(){
        console.log(this.state)
        let { posts, nextPage, loading } = this.state;
        const articles = posts.map(post => {
            return <Articles post={post} key={post._id} />
        });

        return(            
            <div>                
            {loading ? <Spinner/> : (
                <div className="columns is-fullheight">
                    <Slider data={posts} />
                    <div className="column right-side is-half-desktop is-full-mobile">
                        <section className="hero is-fullheight is-default is-bold">
                            <div className="hero-body" id="hero-body-blog">
                                <div className="container">

                                    {articles}

                                </div>
                            </div>
                        </section>
                        <ActionButton callback={(p, s) => this.fetchMoreArticles(nextPage, 3)} />
                    </div>
                </div>
            )}
            </div>
        );
    }
}

export default BlogContainer;