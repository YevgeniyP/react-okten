import React from "react";
import item from "./SimpsonItem.module.css";

function SimpsonItem(props) {
  const { name, surname, age, gender, photo, info } = props;
  return (
    <div className={item.item}>
      <div className={item.photo}>
        <img alt={`${name} ${surname}`} src={photo} />
      </div>
      <div>
        <div>
          <b>Name: </b>
          {name}
        </div>
        <div>
          <b>Surname: </b>
          {surname}
        </div>
        <div>
          <b>Age: </b>
          {age}
        </div>
        <div>
          <b>Gender: </b>
          {gender}
        </div>
        <div>
          <p>
            <b>Info</b>
          </p>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
}

export default SimpsonItem;
