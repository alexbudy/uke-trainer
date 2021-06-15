import classes from "./Controls.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import STATES from "./states";

const Controls = (props) => {
  let currentState = props.currentState;

  let btnText = "Start ▶";
  let btnFn = props.onCountdown;

  if (currentState === STATES.PAUSED) {
    btnText = "Resume ▶";
    btnFn = props.onStarted;
  } else if (
    currentState === STATES.STARTED ||
    currentState === STATES.COUNTDOWN
  ) {
    btnText = "Pause ||";
    btnFn = props.onPaused;
  }

  return (
    <div className={classes.controls}>
      <Input
        onChange={props.onIntervalChange}
        value={props.interval}
        classes={classes.slider}
      >
        Interval:{" "}
      </Input>
      <Button onClick={btnFn} fixedWidth={true}>
        {btnText}
      </Button>
      <Button onClick={props.onReset}>Reset</Button>
    </div>
  );
};

export default Controls;
