import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LogoutModule extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            auht: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            sessionStorage.removeItem('Nekot');
            this.setState({ auth: false })            
        }, 2000);
    }

    render(){
        const token = sessionStorage.getItem('Nekot');

        return(token !== null ? (
            <div className="card" style={{ margin: "20% auto", width: "50%" }}>
                <div className="card-content">
                    <h3>Bye Bye Charlie....</h3>
                </div>
            </div>            
        ) : (
            <Redirect push to="/moreno/acces/login"/>
        )
    )}
}

export default LogoutModule;