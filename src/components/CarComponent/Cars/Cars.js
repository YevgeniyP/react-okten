import { useEffect, useState } from "react";

import { Car } from "../Car/Car";
import { carService } from "../../../services/carService";

const Cars = ({ setUpdateCar, trigger, setTrigger }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    try {
      carService.getAll().then(({ data }) => setCars(data));
    } catch (e) {
      console.error(e);
    }
  }, [trigger]);

  return (
    <div>
      {cars.map((car) => (
        <Car
          key={car.id}
          car={car}
          setUpdateCar={setUpdateCar}
          setTrigger={setTrigger}
        />
      ))}
    </div>
  );
};

export { Cars };
