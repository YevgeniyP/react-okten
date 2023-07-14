import React, { useEffect, useState } from "react";
import { CarForm } from "../CarForm/CarForm";
import { CarItem } from "../CarItem/CarItem";
import styles from "./CarComponent.module.css";
import { useForm } from "react-hook-form";

const CarsComponent = () => {
  const apiUrl = "http://owu.linkpc.net/carsAPI/v1/cars";

  const { setValue } = useForm();

  const [cars, setCars] = useState([]);

  const createCar = (data) => {
    fetch(apiUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  const updateCar = (data) => {};

  const deleteCar = (carId) => {
    fetch(`${apiUrl}/${carId}`, {
      method: "DELETE",
    });
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((cars) => setCars(cars));
  }, [createCar, updateCar, deleteCar]);

  return (
    <div className={styles.wrapper}>
      <CarForm createFunction={createCar} />
      <div className={styles.wrapperCar}>
        <h2 className={styles.header}>Список автомобілів</h2>
        {cars.map((car) => (
          <CarItem
            key={car.id}
            car={car}
            updateFunction={updateCar}
            deleteFunction={deleteCar}
          />
        ))}
      </div>
    </div>
  );
};

export { CarsComponent };
