import React from 'react';
import './../css/slider.css';

const Slider = ({data=''}) => {
    return(
        <div className="column left-side is-half-desktop is-hidden-touch" id="hero-back">
            <section className="hero is-fullheight is-default is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="title is-1">{ data.length !== 0 ? data[0].title : '' }</div>
                        <div>
                            <span>
                                <i className="fa fa-heart"></i>
                                <span className="icon-social-slider">12</span>
                            </span>
                            <span>
                                <i className="fa fa-retweet"></i>
                                <span className="icon-social-slider">20</span>
                            </span>
                            <span>
                                <i className="fa fa-eye"></i>
                                <span className="icon-social-slider">45</span>
                            </span>                        
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Slider;