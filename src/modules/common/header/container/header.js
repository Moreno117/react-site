import React, { Component } from "react";
import { withRouter } from 'react-router'
import './../header.css';

class Header extends Component {
    constructor(props){
        super(props);

        this.state = { show: false }
    }

    toogleNav(){
        this.setState({ show: !this.state.show });
    }

    render() {                           
        let showNav = ['navbar-menu'];
        if (this.state.show) showNav.push(' is-active');

        return (
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item navbar-logo-modified" href="../">
                                {/* <img src="/images/CM_LogoMini.jpg" alt="Logo"> */}
                                Carlos <strong className="header-logo-last-name" style={{ color:'#af1911' }}>Moreno</strong>
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenu"
                                onClick={this.toogleNav.bind(this)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className={showNav}>
                            <div className="navbar-end">
                                <a href="/blog" className="navbar-item">
                                    Blog
                                </a>
                                {/* <a href="/social" className="navbar-item">
                                    Thoughs
                                </a> */}
                                <a href="/about" className="navbar-item">
                                    Bio
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withRouter(Header);