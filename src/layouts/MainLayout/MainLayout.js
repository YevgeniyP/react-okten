import { Outlet } from "react-router-dom";

import { MenuComponent } from "../../components/MenuComponent/MenuComponent";
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <MenuComponent />
      <Outlet />
    </div>
  );
};

export { MainLayout };
