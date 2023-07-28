import { NavLink } from "react-router-dom";

import { appRouting } from "../../routing/AppRouting";
import styles from "./MenuComponent.module.scss";

const MenuComponent = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to={appRouting.TODOS}>TODOS</NavLink>
      <NavLink to={appRouting.ALBUMS}>ALBUMS</NavLink>
      <NavLink to={appRouting.COMMENTS}>COMMENTS</NavLink>
    </div>
  );
};

export { MenuComponent };
