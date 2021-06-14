import React, { useState } from "react";
import ChordScroller from "./ChordScroller";
import ChordTable from "./ChordTable";
import classes from "./Content.module.css";
import allChords from "./chords";

const Content = () => {
  const [selectedChords, setSelectedChords] = useState(allChords.slice(0, 2));

  const toggleChord = (chord) => {
    setSelectedChords((prevChords) => {
      let foundChordIdx = prevChords.findIndex((el) => el === chord);
      if (foundChordIdx > -1) {
        let newChords = prevChords.slice();
        newChords.splice(foundChordIdx, 1);
        return newChords;
      } else {
        return prevChords.concat([chord]);
      }
    });
  };

  return (
    <div className={classes.main}>
      <ChordScroller chords={selectedChords} />
      <ChordTable toggleChord={toggleChord} selectedChords={selectedChords} />
    </div>
  );
};

export default Content;
