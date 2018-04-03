import React from 'react';

const Card = ({ post, deletePost }) => {
    return(
        <div className="card" style={{ width:'40%', margin:'1em' }}>
            <header className="card-header">
                <p className="card-header-title">
                { post.title }
                </p>            
            </header>
            <div className="card-content">
                <div className="content">
                { post.resume }
                <br/>
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
            <footer className="card-footer">                
                <a href={`/dashboard/posts/${post._id}/edit`} className="card-footer-item">Edit</a>
                <a onClick={ deletePost } className="card-footer-item">Delete</a>
            </footer>
        </div>
    );
}

export default Card;