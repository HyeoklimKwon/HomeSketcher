import classes from './AnimationToggle.module.css';

function AnimationToggle() {
  return (
    <div className={classes.body}>
      <div className={classes.main}>
        <a href="#terrestrial" className={classes.open_popup}>
          terrestrial animals
        </a>
        <a href="#aquatic" className={classes.open_popup}>
          aquatic animals
        </a>
      </div>

      <section id="terrestrial" className={classes.popup}>
        <a href="#" className={classes.back}>
          &lt; back
        </a>
        <p>🦓🦒🐅🐆🐘🦏🐃🦌🐐🐫</p>
      </section>

      <section id="aquatic" className={classes.popup}>
        <a href="#" className={classes.back}>
          &lt; back
        </a>
        <p>🐋🐳🐬🐟🐠🐡🐙🦑🦐🦀</p>
      </section>
    </div>
  );
}
export default AnimationToggle;
