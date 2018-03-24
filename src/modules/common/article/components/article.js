import React from 'react';

const Articles = ({title}) => {
    return(
        <div class="column is-full-desktop">
            <h1 class="blog-timestamp">
                2 days ago
            </h1>
            <h1 class="title is-5">
                { title }
            </h1>

            <h2 class="blog-summary">
            { resume }
            </h2>
            <a href="/post/<%= post._id %>">Read more...</a>
        </div>
    );
}

export default Articles;