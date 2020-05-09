import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkItem:{
    color:"white",
    textTransform:"uppercase",
    padding:'0 5px'
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Resolute
          </Typography>
          {/* <Button color="inherit" onClick={props.bookAppointments} >Book an Appointment</Button> */}
          <Link to="/home" component={RouterLink} underline='none' className={classes.linkItem}>Book an Appointment</Link>
          <Link to="/user" component={RouterLink} underline='none' className={classes.linkItem}>Booked Appointments</Link>
          <Button color="inherit" onClick={props.logout} >Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
