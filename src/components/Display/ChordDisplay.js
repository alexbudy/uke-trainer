import React, { useEffect, useState, useRef } from "react";
import Display from "./ChordUI/Display";
import STATES from "./states";
import { delay } from "./utils";

const ChordDisplay = (props) => {
  const [curDisplay, setCurDisplay] = useState("");

  const chordCount = useRef(0);

  let { interval, chords, currentState, onComplete } = props;

  useEffect(() => {
    if (currentState === STATES.COUNTDOWN) {
      Promise.resolve()
        .then(() => delay(1))
        .then(() => setCurDisplay("1"))
        .then(() => delay(1))
        .then(() => setCurDisplay("2"))
        .then(() => delay(1))
        .then(() => setCurDisplay("3"))
        .then(() => onComplete());
    }
  }, [currentState, onComplete]);

  useEffect(() => {
    let intervalId;

    if (currentState === STATES.STARTED) {
      if (chords.length === 0) {
        return;
      }
      if (chords.length === 1) {
        setCurDisplay(chords[0]);
        chordCount.current = chordCount.current + 1;
      } else {
        intervalId = setInterval(() => {
          chordCount.current = chordCount.current + 1;
          let newChordIdx = Math.floor(Math.random() * chords.length);
          while (chords[newChordIdx] === curDisplay) {
            newChordIdx = Math.floor(Math.random() * chords.length);
          }
          setCurDisplay(chords[newChordIdx]);
        }, interval * 1000);
      }
    } else if (currentState === STATES.STOPPED) {
      setCurDisplay("");
      chordCount.current = 0;
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [interval, chords, currentState, curDisplay]);

  return <Display display={curDisplay} counter={chordCount.current} />;
};

export default ChordDisplay;
