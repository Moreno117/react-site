import React,{ Component } from 'react';
import Tile from './../../components/tile/tile';
import { getImages } from './../../../../api';

class Gallery extends Component{
    constructor(props){
        super(props);

        this.state = {
            images: []
        }
    }

    componentDidMount(){
        getImages()
        .then(response => this.setState({ images: response.data.docs }))
        .catch(err => console.log('error ->', err));
    }

    render(){
        console.log('----> state', this.state);
        const { images } = this.state;
        const tiles = images.map(image => 
            <Tile key={image._id} image={image}/>
        )

        return(
            <div>
                <h1>Gallery</h1>
                <div className="tile is-ancestor">
                    <div className="tile is-vertical is-12">
                        <div className="tile">
                            <div className="tile is-parent">
                                { tiles }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;