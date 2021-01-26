import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';

function Tile(props) {
  const { image, imageAlt, trackName, artistName, albumName } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} src={image} alt={imageAlt} />

      <div>
        <Typography className={classes.primaryText} variant='h3'>
          {trackName}
        </Typography>
        <Typography className={classes.secondaryText} variant='body1'>
          {artistName} · {albumName}
        </Typography>
      </div>
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
    marginRight: 20,
  },
  primaryText: {
    fontSize: '16px',
    fontFamily: "'Inter', sans-serif",
    fontWeight: '400',
    color: '#fff',
    marginBottom: '5px',
  },
  secondaryText: {
    fontSize: '13px',
    fontFamily: "'Inter', sans-serif",
    fontWeight: '400',
    color: '#9b9b9b',
    marginTop: '5px',
  },
}));
