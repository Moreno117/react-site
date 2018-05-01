import React from 'react';
import './../css/post.css';
import { dateParsed } from "./../helpers";

const Post = ({ post, content }) => {    
    const style = {
        background: {
            width: '100%',
            backgroundImage: `url(${post.image})`,
            height: '450px',
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center'
        }
    }

    return(
        <section className="articles">
            <div className="media-content has-text-centered">
                <h1 className="title is-3 article-title" style={{ color:'#af1911' }}>{post.title}</h1>
                <h3 className="subtitle is-4 article-subtitle">
                    {post.create_date !== undefined ? dateParsed(post.create_date) : null}
                </h3>
                <div className="share-with-love">
                    <a href="/"><i className="fa fa-heart"/></a>
                    <a href="/"><i className="fa fa-retweet"/></a>
                    <a href="/"><i className="fa fa-whatsapp"/></a>
                </div>                      
            </div>
            <div className="column is-12" style={style.background}>                
            </div>
            <div className="column is-8 is-offset-2">    
                <div className="card article">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-center">
                                {/* <img src="https://scontent.fmex2-1.fna.fbcdn.net/v/t1.0-9/22089073_1504816602918675_3079149998137686885_n.jpg?oh=57dd17a92cd6761c1eb55a72dc7ede6a&oe=5B4D093D" className="author-image" alt="Placeholder image"/>  */}
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
