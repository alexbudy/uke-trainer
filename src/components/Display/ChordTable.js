import classes from "./ChordTable.module.css";
import ChordItem from "./ChordUI/ChordItem";

const ChordTable = (props) => {
  const onSelectChordHandler = (chord) => {
    props.toggleChord(chord);
  };

  let chordsWithToggles = props.chordsWithToggles;

  return (
    <div className={classes.main}>
      <h3>Available Chords</h3>
      <ul className={classes.list}>
        {Object.keys(chordsWithToggles).map((chord) => (
          <ChordItem
            key={chord}
            chord={chord}
            selected={chordsWithToggles[chord]}
            onSelectChord={onSelectChordHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default ChordTable;
