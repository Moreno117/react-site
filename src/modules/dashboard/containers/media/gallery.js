import React,{ Component } from 'react';
import Tile from './../../components/media/tile';
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

    pickOne(e){
        if(!this.props.callback){
            //TODO: make selection gallery avaible
            console.log('My own fallback', e)
        } else {
            this.props.callback(e)
        }
    }

    render(){        
        const { images } = this.state;
        const tiles = images.map(image => 
            <Tile key={image._id} image={image} selection={(e) => this.pickOne(image.path)}/>
        )

        return(
            <div className="container" style={{ display:'contents' }}>
                <h1>Gallery</h1>                
                { tiles }                
            </div>
        );
    }
}

export default Gallery;