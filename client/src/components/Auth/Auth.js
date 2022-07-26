import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Toolbar, Avatar, Button, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import Input from './Input';
import Icon from './icon';
import { signin, signup } from '../../actions/auth';

import useStyles from './style';
const initializeState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };
const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initializeState);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const switchMode = (e) => {
    e.preventDefault();
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };
  const googleFailure = (err) => {
    console.log(err);
    console.log('Go sign in Failure');
  };

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlineIcon />
        </Avatar>
        <Typography className={classes.titleForm} variant="h5">
          {isSignup ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form className={classes.from} onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {isSignup && (
              <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type={'password'} />}
          </Grid>

          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId="550863548503-lc4a1tjc8plh025hq0hll4jsap4ik0sk.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                {' '}
                Google Sign in
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>{isSignup ? 'Already have an account?? Sign In' : "Don't have an account? Sign Up"}</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
