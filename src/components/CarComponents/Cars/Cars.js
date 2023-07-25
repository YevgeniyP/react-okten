import { useEffect, useState } from "react";

import { Car } from "../Car/Car";

const Cars = ({ trigger, setTrigger, setUpdateCar }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://owu.linkpc.net/carsAPI/v1/cars")
      .then((response) => response.json())
      .then((cars) => setCars(cars));
  }, [trigger]);

  return (
    <div>
      {cars.map((car) => (
        <Car
          key={car.id}
          car={car}
          setTrigger={setTrigger}
          setUpdateCar={setUpdateCar}
        />
      ))}
    </div>
  );
};

export { Cars };
