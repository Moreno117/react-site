import React, { Component } from 'react';
import TypedModule from './../../common/typed';

import image from './../assets/cm_landing.jpg'
import './../landign.css';

class Landing extends Component{
    render(){
        const { header, subtitle, callToAction } = this.props;

        return(
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns is-vcentered">
                        <div className="column is-7">
                            <figure className="image is-4by3">
                                <img src={ image } alt="Description"/>
                            </figure>
                        </div>
                        <div className="column is-4 is-offset-1">
                            <h1 className="title is-2">
                                { header }
                            </h1>
                            <h2 className="subtitle is-4">
                                { subtitle }
                            </h2>
                            <br/>
                            <p className="has-text-centered">
                                <a href="/blog" className="button is-medium is-info is-outlined">
                                    { callToAction }
                                </a>
                            </p>
                            <TypedModule />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;