import { useSelector } from "react-redux";

import styles from "./Header.module.css";

export const Header = () => {
  const { header } = useSelector((state) => state.characters);

  return (
    <div className={styles.Header}>{header ? header : "Rick & Morty"}</div>
  );
};
