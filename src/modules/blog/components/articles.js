import React from 'react';

const Articles = ({ post }) => {
    return(
        <div className="column is-full-desktop">
            <span className="tag is-black" style={{ marginBottom: '7px' }} >{ post.subject }</span>
            <h1 className="title is-5">
                { post.title }
            </h1>
            <h2 className="blog-summary">
                { post.resume}
            </h2>
            <a href={`/post/${post._id}`}>Seguir leyendo...</a>
        </div>
    );
}

export default Articles;