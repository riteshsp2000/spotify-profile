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
    width: '100%',
    height: '50px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: '100%',
    marginRight: 20,
  },
  text: {
    fontSize: '16px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '400',
    color: '#fff',
  },
}));
