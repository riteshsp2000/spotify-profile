import React from 'react';
import Template from '../components/shared/template';

const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8000/login'
    : 'https://spotify-profile.herokuapp.com/login';

function Login() {
  return (
    <Template>
      <a href={LOGIN_URI}>Login</a>
    </Template>
  );
}

export default Login;
