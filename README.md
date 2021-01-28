# spotify-profile-server

## Setup
1. Login into the <a href="https://developer.spotify.com">Spotify Developer</a> website using your spotify account.
2. Create a new app in the <a href="https://developer.spotify.com/dashboard/applications">dashboard</a>.
3. Add `http://localhost:8000/callback` as the redirect uri in the app settings.
4. Create an .env file in the root of the project based on .env.example.
5. Run `yarn install` to install all the server dependencies.
6. Run `yarn client:install` to install all the client dependencies.
7. Run `yarn dev` to start the server in development.


## Technologies used
- <a href="https://reactjs.org/">React.Js</a>
- <a href="https://material-ui.com/">Material-UI</a>
- <a href="https://redux.js.org/">Redux</a>
- <a href="https://reactrouter.com/web/guides/quick-start">React-Router-Dom</a>
- <a href="https://create-react-app.dev/">Create React App</a>
- <a href="https://nodejs.org/en/">Node.Js</a>
- <a href="https://expressjs.com/">Express</a>
- <a href="https://developer.spotify.com/documentation/web-api/">Spotify API</a>


## Deploying to Heroku
1. Create new heroku app
```
heroku create app-name
```

2. Set Heroku environment variables
```
heroku config:set SPOTIFY_CLIENT_ID=XXXXX
heroku config:set SPOTIFY_CLIENT_SECRET=XXXXX
heroku config:set REDIRECT_URI=https://app-name.herokuapp.com/callback
heroku config:set FRONTEND_URI=https://app-name.herokuapp.com
```

3. Push to Heroku
```
git push heroku master
```

4. Add ```http://app-name.herokuapp.com/callback``` as a Redirect URI in the spotify application settings

5. Once the app is live on Heroku, hitting http://app-name.herokuapp.com/login should be the same as hitting http://localhost:8888/login
