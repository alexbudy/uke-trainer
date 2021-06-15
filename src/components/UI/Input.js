import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={`${classes.input} ${props.classes}`}>
      <label>{props.children}</label>
      <input
        type="range"
        min="0.0"
        max="5"
        step="0.5"
        value={props.value}
        onChange={props.onChange}
      />
      <span className={classes.value}>{props.value} s</span>
    </div>
  );
};

export default Input;
