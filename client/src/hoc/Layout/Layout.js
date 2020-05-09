import React, {Component} from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Appbar from '../../Components/Appbar/Appbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const styles=theme=>({
    content:{
        flexGrow:1,
        padding:theme.spacing(3)
    }
});


class Layout extends Component{
    render(){
        const {classes} = this.props;

        return(
            <Auxiliary>
                <CssBaseline />
                <Appbar 
                    logout={this.logoutHandler} 
                    bookAppointments={()=>this.pageChangeHandler("/home")} 
                    showAppointments={()=>this.pageChangeHandler("/user")} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onLogout:()=>dispatch(actions.logout())
    }
}

export default connect(null,mapDispatchToProps)(withStyles(styles)(Layout));