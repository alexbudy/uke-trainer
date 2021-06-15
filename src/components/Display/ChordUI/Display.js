import classes from "./Display.module.css";
import React from "react";

const Display = (props) => {
  return (
    <React.Fragment>
      <div className={classes.chord}>{props.display}</div>
      {props.counter > 0 && (
        <div className={classes.counter}>Counter: {props.counter}</div>
      )}
    </React.Fragment>
  );
};

export default Display;
