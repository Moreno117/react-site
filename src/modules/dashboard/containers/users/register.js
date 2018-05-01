import React, { Component } from 'react';
import { register } from './../../../../api';
import { createCredentials } from './../../helpers';

class Register extends Component{
    constructor(props){
        super(props);

        this.state= {
            username:'',
            password:''
        }
    }

    setChanges(e){
        const { name, value } = e.target;
        if(name === "username")this.setState({ username: value })
        if (name === "password")this.setState({ password: value })
    }

    registerUser(){
        const data = createCredentials(this.state);
        register(data)
        .then(response => {console.log('created',response) })
        .catch(error => { console.log('error', error) });
    }

    render(){
        return(
            <div className="container" style={{width:'50%', margin:'10% auto'}}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            value={this.state.username}
                            placeholder="Text input"
                            name="username"
                            onChange={e => this.setChanges(e)}
                        />
                    </div>
                </div>            

                <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                        <input 
                            className="input is-success"
                            type="password"
                            placeholder="Text input"
                            value={this.state.password}                            
                            name="password"
                            onChange={e => this.setChanges(e)}
                        />
                        <span className="icon is-small is-left">
                            <i className="fa fa-user"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fa fa-check"></i>
                        </span>
                    </div>
                    <p className="help is-info">Field Required</p>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link"
                            onClick={this.registerUser.bind(this)}
                        >
                        Registrar</button>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Register;