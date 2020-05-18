import React, { useState, useReducer, useEffect } from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";
import usersInitial from "../../data/usersInitial";
import UsersContext from "../../context/users-context";
import AddUserForm from "../shared/AddUserForm/index";
import usersReducer from "../../reducers/users-reducer";

export default function Main() {
  const [users, dispatch] = useReducer(usersReducer, usersInitial);
  const [selectedUser, setSelectedUser] = useState({});
  const [orderBy, setOrderBy] = useState(() => {});

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));

    if (users) {
      dispatch({ type: "POPULATE", users });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <>
      <UsersContext.Provider
        value={{
          users,
          dispatch,
          selectedUser,
          setSelectedUser,
          orderBy,
          setOrderBy,
        }}
      >
        <Header />
        <div className="container">
          <br />

          <AddUserForm />
          <Table />
        </div>
      </UsersContext.Provider>
    </>
  );
}
