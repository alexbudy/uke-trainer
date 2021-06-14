import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type="button"
      className={`${classes.button} ${
        props.fixedWidth && classes.buttonFixedWidth
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
