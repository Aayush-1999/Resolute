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

const doctors=[
    {
        name:"Dr. Dinesh Pathak",
        email:"dineshpathak@gmail.com",
        speciality:"ENT",
        experience:"10-15 years",
        timings:"10:00 am - 7:00 pm",
        contact:"7895412510"
    },
    {
        name:"Dr. Harsh Sharma",
        email:"harshsharma@gmail.com",
        speciality:"Heart Surgeon",
        experience:"15-20 years",
        timings:"10:00 am - 1:00 pm",
        contact:"7894561237"
    },
    {
        name:"Dr. Laxmi Prakash",
        email:"laxmiprakash@gmail.com",
        speciality:"Neurologist",
        experience:"5-10 years",
        timings:"10:00 am - 1:00 pm",
        contact:"7894561237"
    },
    {
        name:"Dr. Rajni Jain",
        email:"rajnijain@gmail.com",
        speciality:"General Physician",
        experience:"15-20 years",
        timings:"10:00 am - 1:00 pm",
        contact:"7894561237"
    },
    {
        name:"Dr. Prateek Chadda",
        email:"prateekchadda@gmail.com",
        speciality:"Dentist",
        experience:"15-20 years",
        timings:"10:00 am - 1:00 pm",
        contact:"7894561237"
    },
    {
        name:"Dr. Rajat Garg",
        email:"rajatgarg@gmail.com",
        speciality:"Chest Specialist",
        experience:"15-20 years",
        timings:"10:00 am - 1:00 pm",
        contact:"7894561237"
    },
    {
        name:"Dr. Rajnish Agarwal",
        email:"rajnishagarwal@gmail.com",
        speciality:"Skin Specialist",
        experience:"15-20 years",
        timings:"10:00 am - 1:00 pm",
        contact:"7894561237"        
    },
    {
        name:"Dr. Vivek Mishra",
        email:"vivekmishra@gmail.com",
        speciality:"Chest Specialist",
        experience:"15-20 years",
        timings:"10:00 am - 1:00 pm",
        contact:"7894561237"
    }
]


class Home extends Component{
    state={
        booked:[false]
    }

    bookAppointmentHandler=(doctor,index)=>{
        axios.post("/book",{
            doctor:doctor,
            id:this.props.userId
        })
            .then(response=>{
                if(response.status===200){
                    let newState=this.state.booked;
                    newState[index]=true
                    this.setState({booked:newState})
                }
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
                    {doctors.map((doctor,index)=>{
                        return(
                            <Grid item xs={6} key={doctor.email} sm={4} md={3}>
                                <DoctorCard 
                                    name={doctor.name}
                                    email={doctor.email}
                                    speciality={doctor.speciality}
                                    experience={doctor.experience}
                                    timings={doctor.timings}
                                    contact={doctor.contact}
                                    isBooked={this.state.booked[index]}
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

export default connect(mapStateToProps)(withStyles(styles)(Home));