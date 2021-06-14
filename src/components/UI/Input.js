import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label>{props.children}</label>
      <input
        type="number"
        min="0.1"
        max="10"
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default Input;
