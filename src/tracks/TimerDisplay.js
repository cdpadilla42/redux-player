import React from 'react';
import StyledTrackDisplay from '../styles/TrackDisplayStyles';
import PlayButton from '../components/PlayButton';
import Timer from '../components/Timer';

const TrackDisplay = () => {
  return (
    <StyledTrackDisplay>
      <PlayButton />
      <Timer />
    </StyledTrackDisplay>
  );
};

export default TrackDisplay;
