import { carService } from "../../../services/carService";

const Car = ({ car, setUpdateCar, setTrigger }) => {
  const { id, brand, price, year } = car;

  const remove = (id) => {
    try {
      carService.delete(id).then(setTrigger((prevState) => !prevState));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>
        {id}. Brand: {brand}
      </h2>
      <p>Price: {price}</p>
      <p>Year: {year}</p>
      <input type="button" value={"Update"} onClick={() => setUpdateCar(car)} />
      <input type="button" value={"Remove"} onClick={() => remove(id)} />
    </div>
  );
};

export { Car };
