import React, { Component } from 'react';
import DashboardContainer from './containers/DashboardContainer';
import Wrapper from './../common/wrapper/containers/wrapper';

class DashboardModule extends Component{
    render(){
        return(
            <Wrapper>
                <DashboardContainer/>
            </Wrapper>
        );
    }
}

export default DashboardModule;