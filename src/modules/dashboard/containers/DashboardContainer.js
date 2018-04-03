import React, { Component } from 'react';
import Menu from './../components/menu';
import Home from './Home';
import NewPost from './posts/NewPost';
import EditPost from './posts/EditPost';
import Gallery from './media/gallery';
import NewImage from './media/newImage';
import { menuSections } from './../helpers';

class DashBoardContainer extends Component{
    renderSection(){
        const { pathname, id } = this.props;
        switch (pathname) {
            case '/dashboard/posts/new':
                return <NewPost/>
            case `/dashboard/posts/${id}/edit`:
                return <EditPost/>
            case '/dashboard/images':                
                return <Gallery/>
            case '/dashboard/images/new':
                return <NewImage/>  
            default:
                return <Home/>
        };
    }

    render(){
        return(
            <div className="container" style={{ padding:'2% 0%' }}>
                <div className="columns">
                    <div className="column is-3">
                        <Menu sections={menuSections}/>
                    </div>
                    <div className="column is-9">
                        { this.renderSection() }
                    </div>
                </div>
            </div>            
        );
    }
}

export default DashBoardContainer;