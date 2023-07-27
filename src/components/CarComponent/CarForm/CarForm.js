import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { carService } from "../../../services/carService";
import { carSchema } from "../../../schema/carSchema";

const CarForm = ({ updateCar, setUpdateCar, setTrigger }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(carSchema),
    mode: "onChange",
  });

  if (updateCar) {
    const { brand, price, year } = updateCar;
    setValue("brand", brand);
    setValue("price", price);
    setValue("year", year);
    setFocus("brand");
  }

  const create = (data) => {
    try {
      carService.create(data).then(({ data }) => {
        reset();
        setTrigger((prevState) => !prevState);
        console.info(data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const update = (data) => {
    try {
      carService.update(updateCar.id, data).then(() => {
        reset();
        setUpdateCar(null);
        setTrigger((prevState) => !prevState);
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>{updateCar ? "Update car" : "Create new car"}</h2>
      <form onSubmit={handleSubmit(updateCar ? update : create)}>
        <input type="text" placeholder={"Brand"} {...register("brand")} />
        <input type="text" placeholder={"Price"} {...register("price")} />
        <input type="text" placeholder={"Year"} {...register("year")} />
        <input type="submit" value={updateCar ? "Update" : "Send"} />
      </form>
      {errors.brand && <p>{errors.brand.message}</p>}
      {errors.price && <p>{errors.price.message}</p>}
      {errors.year && <p>{errors.year.message}</p>}
    </div>
  );
};

export { CarForm };
