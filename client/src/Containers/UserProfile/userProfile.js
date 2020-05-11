import React,{ Component } from 'react';
import DoctorCard from '../../Components/doctorCard/doctorCard';
import Grid from '@material-ui/core/Grid';
import axios from '../../axiosInstance';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux';

const styles=(theme) => ({
    root:{
        margin : '15px 0'
    }
});

class UserProfile extends Component{
    state={
        doctors:[]
    }

    componentDidMount(){
        axios.post("/user",{
            id:this.props.userId
        })
        .then(response=>{
            this.setState({doctors:response.data.user.doctor})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        const {classes}=this.props;
        return(
            <Container maxWidth="lg">
                <Grid container className={classes.root} spacing={2}>
                    {this.state.doctors.map((doctor,index)=>{
                        return(
                            <Grid item xs={6} key={index} sm={4} md={3}>
                                <DoctorCard 
                                    name={doctor.name}
                                    email={doctor.email}
                                    speciality={doctor.speciality}
                                    experience={doctor.experience}
                                    timings={doctor.timings}
                                    contact={doctor.contact}
                                    isBooked={true}
                                    bookAppointment={
                                        ()=>this.bookAppointmentHandler(doctor,index)}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps=state=>{
    return{
        userId:state.auth.userId,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(UserProfile));