import styles from "./Car.module.css";

const Car = ({ car, setTrigger, setUpdateCar }) => {
  const { id, brand, price, year } = car;

  const remove = () => {
    fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
      })
      .then(() => setTrigger((prevState) => !prevState));
  };

  return (
    <div className={styles.wrapper}>
      <p>
        <span>id</span>: {id}
      </p>
      <p>
        <span>brand</span>: {brand}
      </p>
      <p>
        <span>price</span>: {price}
      </p>
      <p>
        <span>year</span>: {year}
      </p>
      <input type="button" value={"Update"} onClick={() => setUpdateCar(car)} />
      <input type="button" value={"Delete"} onClick={() => remove()} />
    </div>
  );
};

export { Car };
