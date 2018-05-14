import React,{ Component } from 'react';
import Landing from './containers/landing';
import Wrapper from "./../common/wrapper/containers/wrapper";

class LandignModule extends Component{
    constructor(props){
        super(props);

        this.state = {
            header: 'Notas personales',
            subtitle: 'Sobre tecnología, negocios, viajes y libros que no me reservo el derecho a escribir',
            callToAction: 'Solo 5 minutos'
        }
    }

    render(){
        const { header, subtitle, callToAction } = this.state;

        return(
            <Wrapper>
                <Landing 
                    header={header}
                    subtitle={subtitle}                    
                    callToAction={callToAction}
                 />
            </Wrapper>
        );
    }
}

export default LandignModule;