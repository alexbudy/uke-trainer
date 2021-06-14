import classes from "./ChordScroller.module.css";
import Controls from "./Controls";
import { useState } from "react";
import STATES from "./states";
import ChordDisplay from "./ChordDisplay";

const ChordScroller = () => {
  const [currentState, setCurrentState] = useState(STATES.STOPPED);
  const [interval, setInterval] = useState(1);

  const chords = ["Am", "Bm", "F"];

  const onStartedHandler = () => {
    setCurrentState(STATES.STARTED);
  };

  const onPausedHandler = () => {
    setCurrentState(STATES.PAUSED);
  };

  const onResetHandler = () => {
    setCurrentState(STATES.RESET);
  };

  const onIntervalChangeHandler = (evt) => {
    if (evt.target.value >= 0 && evt.target.value < 10) {
      setInterval(evt.target.value);
    }
  };

  return (
    <div className={classes.chordScroller}>
      <ChordDisplay interval={interval} chords={chords} />
      <Controls
        currentState={currentState}
        onStarted={onStartedHandler}
        onPaused={onPausedHandler}
        onReset={onResetHandler}
        onIntervalChange={onIntervalChangeHandler}
        interval={interval}
      />
    </div>
  );
};

export default ChordScroller;
