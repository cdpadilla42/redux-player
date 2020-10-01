import React, { useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(60);
  const [intervalID, setIntervalID] = useState(null);
  const ellapseTime = () => {
    console.log(time);
    setTime((time) => time - 1);
  };

  const runTime = () => {
    console.log('starting');
    setIntervalID(setInterval(ellapseTime, 1000));
    console.log(intervalID);
  };

  const pauseTime = () => {
    console.log('stopping', intervalID);
    clearInterval(intervalID);
  };

  return (
    <>
      <div className="player_controls" onClick={runTime}>
        {time}
      </div>
      <div onClick={pauseTime}>Pause</div>
    </>
  );
};

export default Timer;
