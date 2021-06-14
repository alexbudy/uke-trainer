import { useEffect, useState } from "react";
import classes from "./ChordDisplay.module.css";

const ChordDisplay = (props) => {
  const [curChord, setCurChord] = useState("");

  let interval = props.interval;

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurChord(
        props.chords[Math.floor(Math.random() * props.chords.length)]
      );
    }, interval * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  return <div className={classes.chord}>{curChord}</div>;
};

export default ChordDisplay;
