import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://img.freepik.com/free-photo/front-view-doctor-with-medical-mask-posing-with-crossed-arms_23-2148445082.jpg?size=626&ext=jpg"
          title="doctor image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
                {props.name}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Speciality : {props.speciality}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Experience : {props.experience}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Timings : {props.timings}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Contact : {props.contact}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Email : {props.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={props.bookAppointment} >
          Book an appointment
        </Button>
      </CardActions>
    </Card>
  );
}
