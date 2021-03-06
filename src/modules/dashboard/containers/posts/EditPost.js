import React,{ Component } from 'react';
import { Redirect } from "react-router-dom";

import { withRouter } from 'react-router';
import Gallery from './../media/gallery';
import Modal from './../../../common/modal/modal';
import Form from './../../components/posts/form';
import { topics, validateForm, createForm } from './../../helpers';
import { showPost, updatePost } from './../../../../api';

class EditPost extends Component{
    constructor(props){
        super(props);

        this.state = {
            author: '',
            title: '',
            content: '',
            image: '',
            subject: 'Business',
            updateSuccess: false,
            redirect: false,
            openModal: false
        }
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        showPost(id)
        .then(response => {
            const { title, author, content, image, subject } = response.data;
            this.setState({ title, author, content, image, subject })
        })
        .catch(error => console.log(error));
    }

    populateForm(e){
        const { name, value } = e.target;
        switch (name) {
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
    
    handleSelection(e) {
        this.setState({ image: e, openModal: false });
    }

    updatePost(){
        const { id } = this.props.match.params;
        const form = validateForm(this.state);
        if(form === false) return;
        const data = createForm(this.state);
        updatePost(id, data)
        .then(response => {
            console.log('Post update success');
            //TODO: dispatch loadind and dispatch notification 
            setTimeout(() => {
                this.setState({ redirect: true });
            }, 2000)
        })
        .catch(error => console.log(error, 'this fail'));
    }
    
    render(){
        const { title, author, content, image, subject, redirect, openModal } = this.state;

        if (redirect) {
            return <Redirect to='/dashboard' />;
        }

        if (openModal) {
            return (
                <Modal close={() => this.setState({ openModal: false })}>
                    <Gallery callback={this.handleSelection.bind(this)} />
                </Modal>
            )
        }

        return(
            <div>
                <h1>Editing: </h1>
                <Form 
                    topics={ topics }
                    callback={ (e) => this.populateForm(e) }
                    title={ title }
                    content={ content }
                    author={ author }
                    image={ image }
                    subject={ subject }
                    submitt={ this.updatePost.bind(this) }
                    buttonLabel={ 'Update Post' }
                    openModal={() => this.setState({ openModal: true })}
                />
            </div>            
        );
    }
}

export default withRouter(EditPost);