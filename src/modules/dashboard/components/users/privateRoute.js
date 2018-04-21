import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...props }) => {
    let token = sessionStorage.getItem('Nekot');
    console.log('auth', ...props);
    const { isAuthenticated } = props;
    return(
        <Route
            {...props}
            render={props => {                
                return token !== null && isAuthenticated ? (
                <Component {...props}/>
                ) : (
                    <Redirect to={{ pathname: '/login' }}/>
                );
            }}
        />
    );
}

const mapStateToProps = state => {
    return { isAuthenticated: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(PrivateRoute);