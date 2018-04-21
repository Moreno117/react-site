import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...props }) => {
    let token = sessionStorage.getItem('Nekot');
    const { isAuthenticated } = props;
    return(
        <Route
            {...props}
            render={props => {                
                return (token !== null && isAuthenticated) ? (
                <Component {...props}/>
                ) : (
                    <Redirect to={{ pathname: '/moreno/acces/login' }}/>
                );
            }}
        />
    );
}

const mapStateToProps = state => {
    return { isAuthenticated: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(PrivateRoute);