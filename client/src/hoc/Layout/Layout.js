import React, {Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Appbar from '../../Components/Appbar/Appbar';

class Layout extends Component{
    render(){
        return(
            <Auxiliary>
                <Appbar />
                {this.props.children}
            </Auxiliary>
        )
    }
}

export default Layout;