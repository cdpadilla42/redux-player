import React from 'react';
import TrackDisplay from '../tracks/TrackDisplay';
import Playlist from './Playlist';

const Player = () => {
  // size 490 x 300
  return (
    <div className="player">
      <TrackDisplay />
      <Playlist />
    </div>
  );
};

export default Player;
