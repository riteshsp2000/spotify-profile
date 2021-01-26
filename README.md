# spotify-profile-server

## Setup
1. Login into the <a href="https://developer.spotify.com">Spotify Developer</a> website using your spotify account.
2. Create a new app in the <a href="https://developer.spotify.com/dashboard/applications">dashboard</a>
3. Add `http://localhost:8000/callback` as the redirect uri in the app settings.
4. Create an .env file in the root of the project based on .env.example
5. Run `yarn install` to install all the dependencies
5. Run `yarn dev` to start the server in development mode.
