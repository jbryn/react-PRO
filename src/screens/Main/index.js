import React, { useState, useReducer } from "react";
import Header from "../shared/Header";
import Table from "../shared/Table";
import usersInitial from "../../data/usersInitial";
import UsersContext from "../../context/users-context";
import AddUserForm from "../shared/AddUserForm/index";

const usersReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE":
      return action.users;
    case "ADD":
      return [
        ...state,
        {
          idUser: state.length > 0 ? state[state.length - 1].idUser + 1 : 1,
          firstName: action.firstName,
          lastName: action.lastName,
        },
      ];
    case "REMOVE":
      return state.filter((user) => user.idUser !== action.idUser);
    default:
      return state;
  }
};

export default function Main() {
  const [users, dispatch] = useReducer(usersReducer, usersInitial);
  const [selectedUser, setSelectedUser] = useState({});
  const [orderBy, setOrderBy] = useState(() => {});

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
