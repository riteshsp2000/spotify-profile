import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';

function Tile(props) {
  const { image, imageAlt, name } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} src={image} alt={imageAlt} />

      <Typography className={classes.text} variant='h3'>
        {name}
      </Typography>
    </div>
  );
}

export default Tile;

const useStyles = makeStyles(() => ({
  root: {
    width: 'auto',
    height: 'auto',
    // marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: '100%',
    marginRight: 20,
  },
  text: {
    fontSize: '16px',
    fontFamily: "'Inter', sans-serif",
    fontWeight: '400',
    color: '#fff',
    margin: '20px auto',
  },
}));
