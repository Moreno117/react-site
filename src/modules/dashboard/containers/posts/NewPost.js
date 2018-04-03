import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import Form from './../../components/posts/form';
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
            redirect: false
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

    render(){
        const {redirect, title, content, author, image, subject } = this.state;        

        if (redirect) {
            return <Redirect to='/dashboard'/>;
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
            />
        );
    }
}

export default NewPost;