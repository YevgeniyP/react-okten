import React from "react";
import { useForm } from "react-hook-form";

import styles from "./CarForm.module.css";

const CarForm = ({ selectCar, createFunction }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      brand: "",
      year: "",
      price: "",
    },
  });

  return (
    <div>
      <h2 className={styles.header}>Додати автомобіль</h2>
      <form className={styles.wrapper} onSubmit={handleSubmit(createFunction)}>
        <input
          type="text"
          className={styles.textInput}
          placeholder={"Brand"}
          {...register("brand")}
        />
        <input
          type="text"
          className={styles.textInput}
          placeholder={"Price"}
          {...register("price")}
        />
        <input
          type="text"
          className={styles.textInput}
          placeholder={"Year"}
          {...register("year")}
        />
        <input
          type="submit"
          className={styles.submitInput}
          value={"Зберегти"}
        />
      </form>
    </div>
  );
};

export { CarForm };
