import React from "react";
import userCompany from "./UserCompany.module.css";

function UserCompany({ company }) {
  return (
    <div className={userCompany.wrapper}>
      <h4>Company</h4>
      <p>
        <b>Name: </b>
        {company.name}
      </p>
      <p>
        <b>Catch phrase :</b>
        {company.catchPhrase}
      </p>
      <p>
        <b>BS: </b>
        {company.bs}
      </p>
    </div>
  );
}

export default UserCompany;
