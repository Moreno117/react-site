import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import Form from './../../components/posts/form';
import Modal from './../../../common/modal/modal';
import Gallery from './../media/gallery';
import { topics, validateForm, createForm } from './../../helpers';
import { createPost } from './../../../../api';

class NewPost extends Component{
    constructor(props){
        super(props);

        this.state = {
            author: '',
            title: '',
            content: '',
            image: '',
            subject: 'Business',
            postSuccess: false,
            redirect: false,
            openModal: false
        }
    }

    populateForm(e){
        const { name, value } = e.target;
        switch (name){
            case 'title': 
                this.setState({ title: value });
                break;
            case 'author':
                this.setState({ author: value });
                break;
            case 'body':
                this.setState({ content: value });
                break;
            case 'image':
                this.setState({ image: value });
                break;
            default: this.setState({ subject: value })
        }
    }

    publicPost(){
        const form = validateForm(this.state);
        if(form === false) return;
        const data = createForm(this.state);
        createPost(data)
        .then(response => {
            console.log('Post success');
            //TODO: dispatch loadind and dispatch notification 
            setTimeout(() => {
                this.setState({ redirect:true });
            },2000)
        })
        .catch(error => console.log('error --->', error))
    }

    handleSelection(e){
        this.setState({ image: e, openModal: false });
    }

    render(){
        console.log(this.state)
        const {redirect, title, content, author, image, subject, openModal } = this.state;        

        if (redirect) {
            return <Redirect to='/dashboard'/>;
        }

        if(openModal) {
            return (
            <Modal close={()=>this.setState({openModal:false}) }>
                <Gallery callback={this.handleSelection.bind(this)}/>
            </Modal>
            )
        }

        return(            
            <Form 
                topics={ topics }
                callback={ (e) => this.populateForm(e) }
                title={ title }
                content={ content }
                author={ author }
                image={ image }
                subject={ subject }
                submitt={ this.publicPost.bind(this) }
                buttonLabel={ 'Create Post' }
                openModal={() => this.setState({ openModal: true }) }
            />            
        );
    }
}

export default NewPost;