import React,{ Component } from 'react';
import Form from './../../components/media/form';
import { createImage } from './../../../../api';
import { validateImageForm } from './../../helpers';

class NewImage extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            title: '',
            source: '',
            image: '',
            imagePure: '',
            uploadSuccess: false
        }
    }

    handleUpload(){
        const { title, image, source, imagePure } = this.state; 
        if( title.length <= 1 || image === '') return
        const img = { title, source, upload:imagePure }
        const data = validateImageForm(img);
        createImage(data)
        .then(response => this.setState({ uploadSuccess: true }))
        .catch(error => console.log(error))
    }

    handlePreview(e){
        const imagePure = e.target.files[0];
        const url = URL.createObjectURL(e.target.files[0]);
        const { name, size, type } = e.target.files[0];
        const imageData = {name, size, type, url};
        this.setState({ image:imageData, imagePure  })
    }

    handleChangeText(e){
        const { name, value } = e.target;
        switch (name) {
            case 'title':                
                this.setState({ title: value })
                break;
            case 'source':
                this.setState({ source: value })
                break;
            default: return                
        }
    }

    render(){
        const { title, source, image } = this.state;

        return(
            <div>
                <h1>New Image Here</h1>
                <Form
                    title={ title }
                    source={ source }
                    image={ image }
                    buttonText={ 'Upload' }
                    callback={ (e) => this.handleChangeText(e) }
                    preview={ (e) => this.handlePreview(e) }
                    upload={ this.handleUpload.bind(this) }
                />
            </div>
        )
    }
}

export default NewImage;