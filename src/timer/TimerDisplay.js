import React from 'react';
import StyledTrackDisplay from '../styles/TrackDisplayStyles';
import PlayButton from './PlayButton';
import Timer from './Timer';

const TrackDisplay = () => {
  return (
    <StyledTrackDisplay>
      <PlayButton />
      <Timer />
    </StyledTrackDisplay>
  );
};

export default TrackDisplay;
