import React, { Component } from "react";
import './../header.css';

class Header extends Component {
    render() {
        return (
            <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item navbar-logo-modified" href="../">
                                {/* <img src="/images/CM_LogoMini.jpg" alt="Logo"> */}
                                Carlos <strong className="header-logo-last-name">Moreno</strong>
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" className="navbar-menu">
                            <div className="navbar-end">
                                <a href="/blog" className="navbar-item">
                                    Blog
                                </a>
                                <a href="/social" className="navbar-item">
                                    Thoughs
                                </a>
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

export default Header;