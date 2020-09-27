import React from 'react';
import StyledTrackDisplay from '../styles/TrackDisplayStyles';
import AlbumCover from './AlbumCover';
import PlayerControls from './PlayerControls';

const TrackDisplay = () => {
  return (
    <StyledTrackDisplay>
      <AlbumCover />
      <PlayerControls />
    </StyledTrackDisplay>
  );
};

export default TrackDisplay;
