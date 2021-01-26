import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

export default function MiniDrawer({ children }) {
  const classes = useStyles();
  const [active, setActive] = useState(0);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Link className={classes.logoContainer} to='/'>
          <img className={classes.logo} src='/favicon.png' alt='spotify logo' />
        </Link>

        <Link
          className={
            active === 0 ? `${classes.link} ${classes.active}` : classes.link
          }
          to='/'
          onClick={() => setActive(0)}
        >
          <i className={`${classes.icon} fas fa-2x fa-user-alt`} />
          <h3 className={classes.menuName}>Profile</h3>
        </Link>
        <Link
          className={
            active === 1 ? `${classes.link} ${classes.active}` : classes.link
          }
          to='/tracks'
          onClick={() => setActive(1)}
        >
          <i className={`${classes.icon} fas fa-2x fa-music`} />
          <h3 className={classes.menuName}>Tracks</h3>
        </Link>
        <Link
          className={
            active === 2 ? `${classes.link} ${classes.active}` : classes.link
          }
          to='/artists'
          onClick={() => setActive(2)}
        >
          <i className={`${classes.icon} fas fa-2x fa-microphone`} />
          <h3 className={classes.menuName}>Artists</h3>
        </Link>
        <Link
          className={
            active === 3 ? `${classes.link} ${classes.active}` : classes.link
          }
          to='/recent'
          onClick={() => setActive(3)}
        >
          <i className={`${classes.icon} fas fa-2x fa-history`} />
          <h3 className={classes.menuName}>Recent</h3>
        </Link>
        <Link
          className={
            active === 4 ? `${classes.link} ${classes.active}` : classes.link
          }
          to='/playlist'
          onClick={() => setActive(4)}
        >
          <i className={`${classes.icon} fas fa-2x fa-play`} />
          <h3 className={classes.menuName}>Playlist</h3>
        </Link>

        <a
          className={classes.github}
          href='https://github.com/riteshsp2000/spotify-profile'
        >
          <i className={`${classes.icon} fab fa-3x fa-github`} />
        </a>
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
      minHeight: '80px',
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
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  link: {
    margin: '0px',
    width: '100%',
    height: '80px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      padding: '15px 10px 10px 10px',
      width: '25%',
      height: '80px',
    },
  },
  active: {
    backgroundColor: '#181818',
    borderLeft: '5px solid rgb(30, 215, 96)',
    [theme.breakpoints.down('xs')]: {
      borderLeft: 0,
      borderTop: '3px solid rgb(30, 215, 96)',
    },
  },
  icon: {
    color: '#DCDCDC',
  },
  menuName: {
    color: '#DCDCDC',
    fontSize: 10,
    marginTop: 5,
    marginBottom: 0,
    fontFamily: "'Montserrat', sans-serif",
  },
  github: {
    width: '100%',
    height: '80px',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));
