import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function MiniDrawer({ children }) {
  const classes = useStyles();

  return <div className={classes.root}>hello</div>;
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
}));
