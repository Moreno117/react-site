import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "./../../actions";

import Panel from "./../../components/users/panel";
import { login } from './../../../../api';
import { createCredentials } from './../../helpers';
import { Redirect } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''            
        }
    }

    setCredentials(e){
        const { name, value } = e.target;
        if(name === "username") this.setState({ username: value })
        else this.setState({ password: value });
    }

    auth(){
        const data = createCredentials(this.state);
        login(data)
        .then(response => {
            const { token } = response.data;
            sessionStorage.setItem('Nekot', token);
            this.props.actions.successAuth();      
        })
        .catch(err => console.log(err))
    }

    render(){
        const Tekken = sessionStorage.getItem('Nekot');        
        return (Tekken === null && !this.props.isAuthenticated) ? (
            <div className="container" style={{ width: '30%', margin: '10rem auto' }}>
                <Panel
                    callback={this.auth.bind(this)}
                    credentials={(e) => this.setCredentials(e)}
                />
            </div>
        ) : (
            <Redirect push to="/"/>
        )
    };
}

const mapStateToProps = state => {
    return { isAuthenticated: state.auth.isAuthenticated }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);