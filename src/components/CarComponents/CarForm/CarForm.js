import { useForm } from "react-hook-form";

import styles from "./CarForm.module.css";

const CarForm = ({ setTrigger, updateCar, setUpdateCar }) => {
  const { register, handleSubmit, reset, setValue, setFocus } = useForm();

  if (updateCar) {
    setValue("brand", updateCar.brand);
    setValue("price", updateCar.price);
    setValue("year", updateCar.year);
    setFocus("brand");
  }

  const create = (data) => {
    fetch("http://owu.linkpc.net/carsAPI/v1/cars", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
      })
      .then(() => setTrigger((prevState) => !prevState));
    reset();
  };

  const update = (data) => {
    console.log(data);
    fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${updateCar.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      if (!response.ok) {
        throw new Error();
      }
    });
    setUpdateCar(null);
    reset();
    setTrigger((prevState) => !prevState);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>
        {updateCar ? "Update car" : "Create new car"}
      </h2>
      <form
        className={styles.form}
        onSubmit={handleSubmit(updateCar ? update : create)}
      >
        <input
          type="text"
          placeholder={"Brand"}
          className={`${styles.formInput} ${styles.brand}`}
          {...register("brand")}
        />
        <input
          type="text"
          placeholder={"Price"}
          className={`${styles.formInput} ${styles.price}`}
          {...register("price")}
        />
        <input
          type="text"
          placeholder={"Year"}
          className={`${styles.formInput} ${styles.year}`}
          {...register("year")}
        />
        <input
          type="submit"
          className={`${styles.formButton} ${styles.sendBtb}`}
          value={updateCar ? "Update" : "Submit"}
        />
        <input
          type="button"
          className={`${styles.formButton} ${styles.resetBtn}`}
          value={"Reset"}
          onClick={() => {
            reset();
            setUpdateCar(null);
          }}
        />
      </form>
    </div>
  );
};

export { CarForm };
