import Button from "../ui/Button";
import styles from "../assets/styles/showcase.module.css";

function Showcase() {
  return (
    <div className={styles.showcase}>
      <div className={styles.hero}>
        <div className={styles.info}>
          <h1>ХОТИТЕ ПОПУТЕШЕСТВОВАТЬ?</h1>
          <p>
            Сделайте свои мечты о путешествиях реальностью: планируйте,
            исследуйте и создавайте незабываемые воспоминания.
          </p>
          <Button>Узнать больше</Button>
        </div>

        <form action="" className={styles.form}>
          <input type="text" placeholder="Ваше имя..." />
          <input type="text" placeholder="Введите место..." />
          <input type="date" value="2024-11.17" />
          <Button>Забронировать</Button>
        </form>
      </div>
    </div>
  );
}

export default Showcase;
