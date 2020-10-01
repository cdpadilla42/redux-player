import React from 'react';
import StyledTrackDisplay from '../styles/TrackDisplayStyles';
import PlayButton from '../timer/PlayButton';
import Timer from '../timer/Timer';

const TrackDisplay = () => {
  return (
    <StyledTrackDisplay>
      <PlayButton />
      <Timer />
    </StyledTrackDisplay>
  );
};

export default TrackDisplay;
