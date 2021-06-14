import classes from "./Controls.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import STATES from "./states";

const Controls = (props) => {
  let currentState = props.currentState;

  return (
    <div className={classes.controls}>
      <Input onChange={props.onIntervalChange} value={props.interval}>
        Interval(s):{" "}
      </Input>
      {currentState !== STATES.STARTED && (
        <Button onClick={props.onStarted} fixedWidth={true}>
          {props.currentState === STATES.PAUSED ? "Resume ▶" : "Start ▶"}
        </Button>
      )}
      {props.currentState === STATES.STARTED && (
        <Button onClick={props.onPaused} fixedWidth={true}>
          Pause ||
        </Button>
      )}
      <Button onClick={props.onReset}>Reset</Button>
    </div>
  );
};

export default Controls;
