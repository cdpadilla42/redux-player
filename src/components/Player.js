import React, { useEffect } from 'react';
import TrackDisplay from '../tracks/TrackDisplay';
import Playlist from './Playlist';

// TODO Bring in action creator to run on component mount to get the data

const Player = () => {
  useEffect(() => {
    console.log('hey');
  }, []);

  // size 490 x 300
  return (
    <div className="player">
      <TrackDisplay />
      <Playlist />
    </div>
  );
};

export default Player;
