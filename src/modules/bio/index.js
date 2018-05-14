import React,{ Component  } from 'react';
import { Bio } from './components/bio'; 
import Wrapper from '../common/wrapper/containers/wrapper';

class BioModule extends Component{
    render(){
        return(
            <Wrapper>
                <Bio/>
            </Wrapper>
        )
    }
}

export default BioModule;