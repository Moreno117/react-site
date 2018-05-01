import React from 'react';
// import './../css/slider.css';

const Slider = ({data=''}) => {
    return(
        <div className="column left-side is-half-desktop is-hidden-touch" id="hero-back">
            <section className="hero is-fullheight is-default is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="title is-1">{ data.length !== 0 ? data[0].title : '' }</div>
                        <div className="title is-5">{data.length !== 0 ? data[0].create_date : '' }</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Slider;