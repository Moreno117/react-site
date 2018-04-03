import React from 'react';

const Tile = ({ image }) => {
    return(
        <div className="card" style={{width:'30%', display:'inline-block', margin:'10px'}}>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={ image.path } alt="Thumbnails"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">                
                    <div className="media-content">
                        <p className="title is-5">{ image.title }</p>
                        <p className="subtitle is-6">{ image.source }</p>
                    </div>
                </div>
            </div>
        </div>        
    );
}

export default Tile; 