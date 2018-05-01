import React, { Component } from "react";
import Header from './../../header/container/header';
import Footer from './../../footer/containers/footer';

class Wrapper extends Component{
    render(){        
        // const style={body:{position:'relative', top:'10p'}}
        return(
            <section>
                <Header />                    
                    { this.props.children }                    
                <Footer />
            </section>
        );
    }
}

export default Wrapper;