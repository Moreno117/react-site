import React, { Component } from 'react';
import Typed from './components/typed';

import './typed.css';

class TypedModule extends Component{
    constructor(props){
        super(props);

        this.state = ({
            text: 'hello@carlosmoreno.mx',
            speed: 60
        })
    }

    componentDidMount(){
        const { text, speed } = this.state;
        let i = 0;

        function typeWriter() {
            if(i < text.length){
                document.getElementById("mail-typed").innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        window.onload = () => {
            setTimeout(() => {
                typeWriter();
            }, 900);
        }
    }

    render(){
        return(
            <Typed />
        );
    }
}

export default TypedModule;