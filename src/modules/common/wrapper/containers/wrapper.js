import React, { Component } from "react";
import Header from './../../header/container/header';
import Footer from './../../footer/containers/footer';

class Wrapper extends Component{
    render(){
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