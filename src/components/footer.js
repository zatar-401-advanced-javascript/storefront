import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    height:'20px'
  },
  title: {
    flexGrow: 1,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;