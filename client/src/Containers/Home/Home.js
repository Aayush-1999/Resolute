import React,{ Component } from 'react';
import DoctorCard from '../../Components/doctorCard/doctorCard';
import Grid from '@material-ui/core/Grid';
import axios from '../../axiosInstance';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const styles=(theme) => ({
    root:{
        margin : '15px 0'
    }
  });

class Home extends Component{

    bookAppointmentHandler=()=>{

    }

    render(){
        const {classes}=this.props;
        console.log(this.props)
        return(
            <Container maxWidth="lg">
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={6} sm={4} md={3}>
                    <DoctorCard 
                        name="Dr. Dinesh Pathak"
                        email="dineshpathak@gmail.com"
                        speciality="ENT"
                        experience="10-15 years"
                        timings="10:00 am - 7:00 pm"
                        contact="7895412510"
                        bookAppointment={this.bookAppointmentHandler}
                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <DoctorCard 
                        name="Dr. Harsh Sharma"
                        email="harshsharma@gmail.com"
                        speciality="Heart Surgeon"
                        experience="15-20 years"
                        timings="10:00 am - 1:00 pm"
                        contact="7894561237"
                        bookAppointment={this.bookAppointmentHandler}

                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <DoctorCard 
                        name="Dr. Laxmi Prakash"
                        email="laxmiprakash@gmail.com"
                        speciality="Neurologist"
                        experience="5-10 years"
                        timings="10:00 am - 1:00 pm"
                        contact="7894561237"
                        bookAppointment={this.bookAppointmentHandler}

                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <DoctorCard 
                        name="Dr. Rajni Jain"
                        email="rajnijain@gmail.com"
                        speciality="General Physician"
                        experience="15-20 years"
                        timings="10:00 am - 1:00 pm"
                        contact="7894561237"
                        bookAppointment={this.bookAppointmentHandler}

                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <DoctorCard 
                        name="Dr. Prateek Chadda"
                        email="prateekchadda@gmail.com"
                        speciality="Dentist"
                        experience="15-20 years"
                        timings="10:00 am - 1:00 pm"
                        contact="7894561237"
                        bookAppointment={this.bookAppointmentHandler}

                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <DoctorCard 
                        name="Dr. Rajat Garg"
                        email="rajatgarg@gmail.com"
                        speciality="Chest Specialist"
                        experience="15-20 years"
                        timings="10:00 am - 1:00 pm"
                        contact="7894561237"
                        bookAppointment={this.bookAppointmentHandler}

                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <DoctorCard 
                        name="Dr. Rajnish Agarwal"
                        email="rajnishagarwal@gmail.com"
                        speciality="Skin Specialist"
                        experience="15-20 years"
                        timings="10:00 am - 1:00 pm"
                        contact="7894561237"
                        bookAppointment={this.bookAppointmentHandler}

                    />
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <DoctorCard 
                        name="Dr. Vivek Mishra"
                        email="vivekmishra@gmail.com"
                        speciality="Chest Specialist"
                        experience="15-20 years"
                        timings="10:00 am - 1:00 pm"
                        contact="7894561237"
                        bookAppointment={this.bookAppointmentHandler}

                    />
                </Grid>
            </Grid>
            </Container>
        )
    }
}

export default withStyles(styles)(Home);