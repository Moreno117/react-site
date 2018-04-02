import React from 'react';

const Post = ({ post, content }) => {
    return(
        <section className="articles">
            <div className="column is-8 is-offset-2">
                
            <section className="hero is-danger is-bold is-small promo-block">
                <div className="hero-body">
                    <img src={ post.image } alt="main head" />    
                </div>
            </section>                     
                
                <div className="card article">
                    <div className="card-content">
                        <div className="media">
                        <div className="media-center">
                            {/* <img src="https://scontent.fmex2-1.fna.fbcdn.net/v/t1.0-9/22089073_1504816602918675_3079149998137686885_n.jpg?oh=57dd17a92cd6761c1eb55a72dc7ede6a&oe=5B4D093D" className="author-image" alt="Placeholder image"/>  */}
                        </div>
                        <div className="media-content has-text-centered">
                            <p className="title article-title">{ post.title }</p>
                            <p className="subtitle is-6 article-subtitle">
                                <a href="/">@d</a> on October 7, 2017
                            </p>
                        </div>
                        </div>

                        <div 
                            className="content article-body"
                            dangerouslySetInnerHTML={{__html: content}}
                        >                                                     
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Post;