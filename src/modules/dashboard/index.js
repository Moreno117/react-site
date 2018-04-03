import React, { Component } from 'react';
import DashboardContainer from './containers/DashboardContainer';
import Wrapper from './../common/wrapper/containers/wrapper';

class DashboardModule extends Component{
    render(){
        const { pathname } = this.props.location;
        const { id } = this.props.match.params;
        return(
            <Wrapper>
                <DashboardContainer pathname={pathname} id={id} />
            </Wrapper>
        );
    }
}

export default DashboardModule;