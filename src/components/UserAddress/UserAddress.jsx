import React from "react";
import userAddress from "./UserAddress.module.css";

function UserAddress({ address }) {
  return (
    <div className={userAddress.wrapper}>
      <h4>Address</h4>
      <p>
        <b>City: </b>
        {address.city}
      </p>
      <p>
        <b>Street: </b>
        {address.street}
      </p>
      <p>
        <b>Suite: </b>
        {address.suite}
      </p>
      <p>
        <b>Zipcode: </b>
        {address.zipcode}
      </p>
      <h4>Geo</h4>
      <p>{address.geo.lat}</p>
      <p>{address.geo.lng}</p>
    </div>
  );
}

export default UserAddress;
