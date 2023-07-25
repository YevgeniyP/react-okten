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
    <div>
      <p>id: {id}</p>
      <p>brand: {brand}</p>
      <p>price: {price}</p>
      <p>year: {year}</p>
      <input type="button" value={"Update"} onClick={() => setUpdateCar(car)} />
      <input type="button" value={"Delete"} onClick={() => remove()} />
      <hr />
    </div>
  );
};

export { Car };
