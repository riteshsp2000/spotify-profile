import React from 'react';

import Template from '../components/shared/template';
import ArtistTile from '../components/artists/Tile';
import ArtistWidget from '../components/artists/Widget';
import TrackTile from '../components/tracks/Tile';

import artist from '../assets/img/artist.jpeg';
import track from '../assets/img/track.jpeg';

import { logout } from '../utils/api';

const LOGOUT_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8000/logout'
    : 'https://spotify-profile.herokuapp.com/logout';

function Home() {
  return (
    <Template>
      {/* <a href={LOGOUT_URI}>LOGOUT</a> */}
      <button onClick={logout}>Logout</button>
      <h1 style={{ color: '#fff', margin: 20 }}>Hello</h1>
      <div style={{ margin: 20, width: '50%' }}>
        <ArtistTile
          image={artist}
          imageAlt='Howard Shore'
          name='Howard Shore'
        />
        <ArtistTile
          image={artist}
          imageAlt='Howard Shore'
          name='Howard Shore'
        />
        <ArtistTile
          image={artist}
          imageAlt='Howard Shore'
          name='Howard Shore'
        />
        <ArtistTile
          image={artist}
          imageAlt='Howard Shore'
          name='Howard Shore'
        />
      </div>
      <div style={{ margin: 20, minwidth: '50%', width: 'auto' }}>
        <TrackTile
          image={track}
          imageAlt='The Battle of the Pelennor Fields'
          trackName='The Battle of the Pelennor Fields'
          albumName='The Lord of the Rings'
          artistName='Howard Shore'
        />
        <TrackTile
          image={track}
          imageAlt='The Battle of the Pelennor Fields'
          trackName='The Battle of the Pelennor Fields'
          albumName='The Lord of the Rings'
          artistName='Howard Shore'
        />
        <TrackTile
          image={track}
          imageAlt='The Battle of the Pelennor Fields'
          trackName='The Battle of the Pelennor Fields'
          albumName='The Lord of the Rings'
          artistName='Howard Shore'
        />
        <TrackTile
          image={track}
          imageAlt='The Battle of the Pelennor Fields'
          trackName='The Battle of the Pelennor Fields'
          albumName='The Lord of the Rings'
          artistName='Howard Shore'
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'space-around',
        }}
      >
        <ArtistWidget
          image={artist}
          imageAlt='Howard Shore'
          name='Howard Shore'
        />
        <ArtistWidget
          image={artist}
          imageAlt='Howard Shore'
          name='Howard Shore'
        />
        <ArtistWidget
          image={artist}
          imageAlt='Howard Shore'
          name='Howard Shore'
        />
        <ArtistWidget
          image={artist}
          imageAlt='Howard Shore'
          name='Howard Shore'
        />
      </div>
    </Template>
  );
}

export default Home;
