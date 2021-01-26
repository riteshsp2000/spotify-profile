import React from 'react';

import { makeStyles } from '@material-ui/core';

function Template({ children }) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}

export default Template;

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '100px',
    width: 'calc(100% - 100px)',
    height: '100vh',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      width: '100%',
      // height: ''
    },
  },
}));
