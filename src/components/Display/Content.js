import React from "react";
import ChordScroller from "./ChordScroller";
import classes from "./Content.module.css";

const Content = () => {
  return (
    <div className={classes.main}>
      <ChordScroller />
      {/* Chord list here */}
    </div>
  );
};

export default Content;
