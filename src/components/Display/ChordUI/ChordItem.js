import classes from "./ChordItem.module.css";

const ChordItem = (props) => {
  return (
    <li
      className={classes.item}
      onClick={props.onSelectChord.bind(null, props.chord)}
    >
      <input type="checkbox" checked={props.selected} readOnly={true} />{" "}
      {props.chord}
    </li>
  );
};

export default ChordItem;
