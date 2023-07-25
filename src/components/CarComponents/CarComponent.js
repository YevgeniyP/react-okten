import { useState } from "react";

import { Cars } from "./Cars/Cars";
import { CarForm } from "./CarForm/CarForm";

const CarComponent = () => {
  const [trigger, setTrigger] = useState(false);
  const [updateCar, setUpdateCar] = useState(null);

  return (
    <div>
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
