import React, {Component} from 'react';
import Appbar from '../../Containers/UserProfile/userProfile';
import Auxiliary from '../Auxiliary/Auxiliary';

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