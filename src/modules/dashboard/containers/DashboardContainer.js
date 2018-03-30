import React, { Component } from 'react';
import Menu from './../components/menu';
import { menuSections } from './../helpers';

class DashBoardContainer extends Component{
    render(){
        return(            
            <div className="container" style={{ padding:'2% 0%' }}>
                <div className="columns">
                    <div className="column is-3">
                        <Menu sections={menuSections}/>
                    </div>
                    <div className="column is-9">
                        <p>Content</p>
                    </div>
                </div>
            </div>            
        );
    }
}

export default DashBoardContainer;