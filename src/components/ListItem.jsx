import React from "react";
import item from "./ListItem.module.css";

function ListItem(props) {
  const { id, name, status, species, gender, image } = props;
  return (
    <div className={item.wrapper}>
      <img alt={name} src={image} className={item.img} />
      <div className={item.info}>
        <h2 className={item.header}>
          {id}. {name}
        </h2>
        <p className={item.text}>
          <b>Status: </b>
          {status}
        </p>
        <p>
          <b>Species: </b>
          {species}
        </p>
        <p>
          <b>Gender: </b>
          <span>{gender}</span>
        </p>
      </div>
    </div>
  );
}

export default ListItem;
