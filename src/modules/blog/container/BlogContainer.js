import React,{ Component } from "react";

import ActionButton from './../components/actionButton';
import Slider from './../components/slider';
import Articles from './../components/articles';

class BlogContainer extends Component{
    render(){
        return(
            <div class="columns is-fullheight">                
                
                <Slider/>                
                
                <div class="column right-side is-half-desktop is-full-mobile">
                    <section class="hero is-fullheight is-default is-bold">
                        <div class="hero-body" id="hero-body-blog">
                            <div class="container">

                            <Articles/>

                            </div>
                        </div>
                    </section>
                    
                    <ActionButton />
                    
                </div>
            </div>
        );
    }
}

export default BlogContainer;