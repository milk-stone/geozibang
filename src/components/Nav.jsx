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
        <NavItem to="/consume" icon={faDollarSign} text="소비 보기" />
        <NavItem to="/calendar" icon={faCalendar} text="달력 보기" />
        <NavItem to="/period" icon={faStopwatch} text="기간별 보기" />
        <NavItem to="/settings" icon={faGear} text="환경 설정" />
      </ul>
    </nav>
  );
};
