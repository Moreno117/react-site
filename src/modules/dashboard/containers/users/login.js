import React, { Component } from 'react';
import Panel from "./../../components/users/panel";
import { login } from './../../../../api';
import { createCredentials } from './../../helpers';

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
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div className="container" style={{width:'30%', margin:'10rem auto'}}>
                <Panel 
                    callback={this.auth.bind(this)}
                    credentials={(e) => this.setCredentials(e) }
                />
            </div>
        );
    }
}

export default Login;