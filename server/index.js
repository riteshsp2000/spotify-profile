// SPOTIFY WEB API AUTHORIZATION CODE FLOW
// https://developer.spotify.com/documentation/general/guides/authorization-guide/
// https://github.com/spotify/web-api-auth-examples

// The react app requires a token(verification token) to get data from the spotify api
// A token is short lived key which helps the spotify server to identify and verify the app/user
// In order to generate the token, we need a server which has a sort of understanding with the spotify api

/*
Steps to follow
1. Create a developer account at spotify
2. Create a new app in the dashboard
3. Copy the client ID and client secret and add them to an .env file
4. Add the redirect uri in the app dashboard
*/

require('dotenv').config();

const express = require('express');
const request = require('request');
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const path = require('path');
const history = require('connect-history-api-fallback');
const randomString = require('randomstring');

const STATE_KEY = 'spotify_auth_state';
const PORT = process.env.PORT || 8000;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
let REDIRECT_URI = process.env.REDIRECT_URI || 'http://localhost:8000/callback';
let FRONTEND_URI = process.env.FRONTEND_URI || 'http://localhost:3000';

if (process.env.NODE_ENV !== 'production') {
  REDIRECT_URI = 'http://localhost:8000/callback';
  FRONTEND_URI = 'http://localhost:3000';
}

const app = express();

// Use middlewares
/**
 * Following is the list of middlewares used in same order
 * 1. express.static - Configures express app to Render the static/client side react app
 * 2. cors - Allos cross-origin resource sharing
 * 3. cookieParse - parses all the cookies stored in the browser for the particular website and makes is accessible under req object
 * 4. history - A sort of proxy which redirects  requests made to localhost:3000 (specified routes) to localhost:4000
 * 3000 the client side is running, 8000 server is running.
 */
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/build')));

app
  .use(express.static(path.resolve(__dirname, '../client/build')))
  .use(cors())
  .use(cookieParser())
  .use(
    history({
      verbose: true,
      rewrites: [
        { from: /\/login/, to: '/login' },
        { from: /\/callback/, to: '/callback' },
        { from: /\/refresh_token/, to: '/refresh_token' },
      ],
    })
  )
  .use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', function (req, res) {
  res.render(path.resolve(__dirname, '../client/build/index.html'));
});

app.get('/login', function (req, res) {
  const state = randomString.generate(16);
  res.cookie(STATE_KEY, state);

  // your application requests authorization
  const scope =
    'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public';

  res.redirect(
    `https://accounts.spotify.com/authorize?${querystring.stringify({
      response_type: 'code',
      client_id: CLIENT_ID,
      scope: scope,
      redirect_uri: REDIRECT_URI,
      state: state,
    })}`
  );
});

app.get('/callback', function (req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  const code = req.query.code || null;
  const state = req.query.state || null;
  const storedState = req.cookies ? req.cookies[STATE_KEY] : null;

  if (state === null || state !== storedState) {
    res.redirect(`/#${querystring.stringify({ error: 'state_mismatch' })}`);
  } else {
    res.clearCookie(STATE_KEY);
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      },
      headers: {
        Authorization: `Basic ${new Buffer.from(
          `${CLIENT_ID}:${CLIENT_SECRET}`
        ).toString('base64')}`,
      },
      json: true,
    };

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        const access_token = body.access_token;
        const refresh_token = body.refresh_token;

        // we can also pass the token to the browser to make requests from there
        res.redirect(
          `${FRONTEND_URI}/#${querystring.stringify({
            access_token,
            refresh_token,
          })}`
        );
      } else {
        res.redirect(`/#${querystring.stringify({ error: 'invalid_token' })}`);
      }
    });
  }
});

app.get('/refresh_token', function (req, res) {
  // requesting access token from refresh token
  const refresh_token = req.query.refresh_token;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization: `Basic ${new Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString('base64')}`,
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;
      res.send({ access_token });
    }
  });
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
});

app.listen(PORT, function () {
  console.warn(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});
