import { useForm } from "react-hook-form";

const CarForm = ({ setTrigger, updateCar, setUpdateCar }) => {
  const { register, handleSubmit, reset, setValue } = useForm();

  if (updateCar) {
    setValue("brand", updateCar.brand);
    setValue("price", updateCar.price);
    setValue("year", updateCar.year);
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
    <div>
      <h2>{updateCar ? "Update car" : "Create new car"}</h2>
      <form onSubmit={handleSubmit(updateCar ? update : create)}>
        <input type="text" placeholder={"Brand"} {...register("brand")} />
        <input type="text" placeholder={"Price"} {...register("price")} />
        <input type="text" placeholder={"Year"} {...register("year")} />
        <input type="submit" value={updateCar ? "Update" : "Submit"} />
      </form>
    </div>
  );
};

export { CarForm };
