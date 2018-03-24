import React,{ Component } from 'react';
import Landing from './containers/landing';
import Wrapper from "./../common/wrapper/containers/wrapper";

class LandignModule extends Component{
    constructor(props){
        super(props);

        this.state = {
            header: 'Random Stuff',
            subtitle: 'Tecnología, negocios, viajes y libros.',
            callToAction: 'Conoce mas...'
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