import React,{ Component } from 'react';
import './../footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="hero-foot">
                <div className="container footer-tab-ul-modified">
                    <div className="tabs is-centered">
                        <ul className="footer-list-social">
                            <li className="social-icon-footer"><a target="blank" href="https://www.facebook.com/juancarlos.morenogarcia.716"><i className="fa fa-facebook"></i></a></li>
                            <li className="social-icon-footer"><a id="so-2" target="blank" href="https://www.instagram.com/cemoreno_/?hl=es-la"><i className="fa fa-instagram"></i></a></li>
                            <li className="social-icon-footer"><a id="so-3" target="blank" href="https://www.linkedin.com/in/juan-carlos-moreno-garcia-2b7616b6/"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="tabs is-centered">
                        <ul>
                            <li id="footer-modified-copy">&#169; Carlos Moreno 2018</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;