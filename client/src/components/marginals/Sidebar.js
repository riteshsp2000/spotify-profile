import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function MiniDrawer({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img className={classes.logo} src='/favicon.png' alt='spotify logo' />

        <i className={`${classes.icon} fas fa-2x fa-user-alt`} />
        <i className={`${classes.icon} fas fa-2x fa-music`} />
        <i className={`${classes.icon} fas fa-2x fa-microphone`} />
        <i className={`${classes.icon} fas fa-2x fa-history`} />
        <i className={`${classes.icon} fas fa-2x fa-play`} />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff',
    position: 'fixed',
    left: 0,
    backgroundColor: '#040306',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minHeight: '70px',
      bottom: 0,
    },
    [theme.breakpoints.up('sm')]: {
      width: '100px',
      minHeight: '100vh',
      top: 0,
    },
  },
  container: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },
  logo: {
    width: '50%',
    height: 'auto',
    position: 'absolute',
    top: 30,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  icon: {
    margin: '20px 0px',
    color: '#DCDCDC',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      padding: '15px 10px',
      width: '25%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}));
