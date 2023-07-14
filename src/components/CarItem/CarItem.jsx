import React from "react";

const CarItem = ({ car, deleteFunction, updateFunction }) => {
  const { id, brand, price, year } = car;
  return (
    <div>
      <p>{brand}</p>
      <p>{price}</p>
      <p>{year}</p>
      <input
        type="button"
        onClick={() => updateFunction(car)}
        value={"Оновити"}
      />
      <input
        type="button"
        onClick={() => deleteFunction(id)}
        value={"Видалити"}
      />
    </div>
  );
};

export { CarItem };
