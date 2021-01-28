import axios from "axios";
import React, { useEffect, useState } from "react";
import { GridContainer } from "./UsersList.style";

export const UsersList = () => {
  const [userData, setUserData] = useState([]);
  const getUserData = () => {
    axios
      .get("http://localhost:3000/users/")
      .then((res) => {
        console.log("success", { res });
        setUserData(res.data);
      })
      .catch(console.log);
  };

  useEffect(() => {
    // console.log("oé");
    getUserData();
  }, []);

  console.log(userData);

  const headerList = () => {
    return (
      <GridContainer>
        <div className="cell">
          <b>Id</b>
        </div>
        <div className="cell">
          <b>Firstname</b>
        </div>
        <div className="cell">
          <b>Lastname</b>
        </div>
        <div className="cell">
          <b>Email</b>
        </div>
      </GridContainer>
    );
  };

  const listUsersRow = () => {
    return userData.map((user, index) => (
      <GridContainer key={index} className="row user">
        <div className="cell">{user.id}</div>
        <div className="cell">{user.firstname}</div>
        <div className="cell">{user.lastname}</div>
        <div className="cell">{user.email}</div>
      </GridContainer>
    ));
  };

  return (
    <div>
      {headerList()}
      {userData?.length !== 0 ? listUsersRow() : <em>Aucun utilisateur</em>}
    </div>
  );
};
