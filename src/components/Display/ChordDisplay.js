import React, { useEffect, useState, useRef } from "react";
import classes from "./ChordDisplay.module.css";
import STATES from "./states";

const ChordDisplay = (props) => {
  const [curChordIdx, setCurChordIdx] = useState();
  const chordCount = useRef(0);

  let { interval, chords, currentState } = props;
  let curChord = isNaN(curChordIdx) ? "" : chords[curChordIdx];

  useEffect(() => {
    let intervalId;
    if (currentState === STATES.STARTED) {
      if (chords.length === 0) {
        return;
      }

      if (chords.length === 1) {
        setCurChordIdx(0);
      } else {
        intervalId = setInterval(() => {
          chordCount.current = chordCount.current + 1;
          let newChordIdx = curChordIdx;
          while (newChordIdx === curChordIdx) {
            newChordIdx = Math.floor(Math.random() * chords.length);
          }
          setCurChordIdx(newChordIdx);
        }, interval * 1000);
      }
    } else if (currentState === STATES.STOPPED) {
      setCurChordIdx(undefined);
      chordCount.current = 0;
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [interval, chords, currentState, curChordIdx]);

  return (
    <React.Fragment>
      <div className={classes.chord}>{curChord}</div>
      <div className={classes.counter}>Counter: {chordCount.current}</div>
    </React.Fragment>
  );
};

export default ChordDisplay;
