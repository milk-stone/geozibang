import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faCalendar,
  faStopwatch,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Nav.module.scss";

export const NavItem = ({ to, icon, text }) => {
  return (
    <li className={styles.item}>
      <Link to={to}>
        <FontAwesomeIcon icon={icon} />
        <p>{text}</p>
      </Link>
    </li>
  );
};

export const NavBottom = () => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.container}>
        <NavItem to="/consume" icon={faDollarSign} text="소비보기" />
        <NavItem to="/calendar" icon={faCalendar} text="달력보기" />
        <NavItem to="/period" icon={faStopwatch} text="지출보기" />
        <NavItem to="/settings" icon={faGear} text="환경설정" />
      </ul>
    </nav>
  );
};
