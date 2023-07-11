import React from "react";
import UserDetails from "../UserDetails/UserDetails";
import UserAddress from "../UserAddress/UserAddress";
import UserCompany from "../UserCompany/UserCompany";
import userComponent from "./UserComponent.module.css";

function UsersComponent({ user }) {
  return (
    <div className={userComponent.wrapper}>
      <UserDetails user={user} />
      <UserAddress address={user.address} />
      <UserCompany company={user.company} />
    </div>
  );
}

export default UsersComponent;
