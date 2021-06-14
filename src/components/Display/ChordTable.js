import classes from "./ChordTable.module.css";
import ChordItem from "./ChordUI/ChordItem";
import allChords from "./chords";

const ChordTable = (props) => {
  const onSelectChordHandler = (chord) => {
    props.toggleChord(chord);
  };

  return (
    <div className={classes.main}>
      <h3>Available Chords</h3>
      <ul className={classes.list}>
        {allChords.map((chord) => (
          <ChordItem
            key={chord}
            chord={chord}
            selected={!!props.selectedChords.find((el) => el === chord)}
            onSelectChord={onSelectChordHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default ChordTable;
