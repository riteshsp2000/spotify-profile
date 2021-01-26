import React from 'react';

import Template from '../components/shared/template';
import Tile from '../components/artists/Tile';

import artist from '../assets/img/artist.jpeg';

function Home() {
  return (
    <Template>
      <h1 style={{ color: '#fff', margin: 20 }}>Hello</h1>
      <div style={{ margin: 20, width: '50%' }}>
        <Tile image={artist} imageAlt='Howard Shore' name='Howard Shore' />
        <Tile image={artist} imageAlt='Howard Shore' name='Howard Shore' />
        <Tile image={artist} imageAlt='Howard Shore' name='Howard Shore' />
        <Tile image={artist} imageAlt='Howard Shore' name='Howard Shore' />
      </div>
      <div style={{ margin: 20, width: '50%' }}>
        <Tile image={artist} imageAlt='Howard Shore' name='Howard Shore' />
        <Tile image={artist} imageAlt='Howard Shore' name='Howard Shore' />
        <Tile image={artist} imageAlt='Howard Shore' name='Howard Shore' />
        <Tile image={artist} imageAlt='Howard Shore' name='Howard Shore' />
      </div>
    </Template>
  );
}

export default Home;
