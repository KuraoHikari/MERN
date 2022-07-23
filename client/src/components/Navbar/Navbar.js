import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid, Toolbar, Avatar, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Memories from './../../images/memories.png';
import useStyles from './style.js';
const Navbar = () => {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" color="inherit">
          Memories
        </Typography>
        <img className={classes.image} src={Memories} alt="memories images" height={60} />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.username} variant="h6">
              {user.result.name}
            </Typography>
            <Button variant="contained" className={classes.logout} color="secondary">
              Logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">
            sign-in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
