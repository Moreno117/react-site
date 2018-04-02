import React from 'react';

const Articles = ({ post }) => {
    return(
        <div className="column is-full-desktop">
            <h1 className="blog-timestamp">
                2 days ago
            </h1>
            <h1 className="title is-5">
                { post.title }
            </h1>
            <h2 className="blog-summary">
                { post.resume}
            </h2>
            <a href={`/post/${post._id}`}>Read more...</a>
        </div>
    );
}

export default Articles;