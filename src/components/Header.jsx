import logo from "../assets/icons/logo.png";
import styles from "../assets/styles/header.module.css";
function Header() {
  return (
    <div className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <a href="#">
              <img className={styles.logo_icon} src={logo} alt="logo" />
            </a>
            <p>FLY MODERN</p>
            <p>AVIAKASSA VISA TOURISM</p>
          </div>
          <ul className={styles.nav_links}>
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Туры</a>
            </li>
            <li>
              <a href="#">Свяжитесь с нами</a>
            </li>
            <li>
              <select name="" id="">
                <option value="uzbek">uz</option>
                <option value="russian">ru</option>
                <option value="english">en</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
