import React from 'react';
import StyledTrackDisplay from '../styles/TrackDisplayStyles';
import AlbumCover from '../components/AlbumCover';
import PlayerControls from '../components/PlayerControls';

const TrackDisplay = () => {
  return (
    <StyledTrackDisplay>
      <AlbumCover />
      <PlayerControls />
    </StyledTrackDisplay>
  );
};

export default TrackDisplay;
