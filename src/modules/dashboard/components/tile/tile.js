import React from 'react';

const Tile = ({ image }) => {
    return(
        <article className="tile is-child" style={{padding:'5px'}}>
            <h5 className="title is-5">{ image.title }</h5>
            <h6 className="subtitle">{ image.source }</h6>
            <figure className="image is-16by9">
                <img src={ image.path } alt="data"/>
            </figure>
        </article>
    );
}

export default Tile; 