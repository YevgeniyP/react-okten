import { useState } from "react";

import { Cars } from "./Cars/Cars";
import { CarForm } from "./CarForm/CarForm";

const CarComponent = () => {
  const [trigger, setTrigger] = useState(false);
  const [updateCar, setUpdateCar] = useState(null);

  console.info(trigger);
  return (
    <div>
      <CarForm
        updateCar={updateCar}
        setUpdateCar={setUpdateCar}
        setTrigger={setTrigger}
      />
      <Cars
        setUpdateCar={setUpdateCar}
        trigger={trigger}
        setTrigger={setTrigger}
      />
    </div>
  );
};

export { CarComponent };
