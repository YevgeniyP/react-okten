import { useState } from "react";

import { Cars } from "./Cars/Cars";
import { CarForm } from "./CarForm/CarForm";

import styles from "./CarComponent.module.css";

const CarComponent = () => {
  const [trigger, setTrigger] = useState(false);
  const [updateCar, setUpdateCar] = useState(null);

  return (
    <div className={styles.wrapper}>
      <CarForm
        setTrigger={setTrigger}
        updateCar={updateCar}
        setUpdateCar={setUpdateCar}
      />
      <Cars
        trigger={trigger}
        setTrigger={setTrigger}
        setUpdateCar={setUpdateCar}
      />
    </div>
  );
};

export { CarComponent };
