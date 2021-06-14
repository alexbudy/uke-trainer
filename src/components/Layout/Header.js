import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>Uke Trainer</h1>
      <div className={classes.summary}>
        Improve your ukelele fretting skills with this customizable trainer
      </div>
    </div>
  );
};

export default Header;
