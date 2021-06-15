import React, { useEffect, useState } from "react";
import ChordScroller from "./ChordScroller";
import ChordTable from "./ChordTable";
import classes from "./Content.module.css";
import { chordDictToList, chordListToDict } from "./utils";

const Content = () => {
  const [chordsWithToggles, setChordsWithToggles] = useState({});

  useEffect(() => {
    const fetchChords = async () => {
      const resp = await fetch(
        "https://uke-trainer-c8999-default-rtdb.firebaseio.com/chords.json"
      );

      if (!resp.ok) {
        throw new Error("Something went wrong!");
      }

      const respData = await resp.json();
      return respData;
    };

    fetchChords().then((data) =>
      setChordsWithToggles(chordListToDict(Object.keys(data)))
    );
  }, []);

  const toggleChord = (chord) => {
    setChordsWithToggles((prevChords) => {
      let newChords = { ...prevChords };
      newChords[chord] = !newChords[chord];

      return newChords;
    });
  };

  return (
    <div className={classes.main}>
      <ChordScroller chords={chordDictToList(chordsWithToggles)} />
      <ChordTable
        toggleChord={toggleChord}
        chordsWithToggles={chordsWithToggles}
      />
    </div>
  );
};

export default Content;
