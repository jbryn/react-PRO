import React, { useContext } from "react";
import PropTypes from "prop-types";
import UsersContext from "../../../context/users-context";

export default function TableRow({ user }) {
  const { dispatch, selectedUser, setSelectedUser } = useContext(UsersContext);

  return (
    <tr
      style={{
        backgroundColor:
          user.idUser === selectedUser.idUser ? "yellow" : "white",
      }}
      onClick={() => setSelectedUser(user)}
    >
      <td>{user.idUser}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "REMOVE", idUser: user.idUser });
          }}
          className="btn-floating btn-small waves-effect waves-light red"
        >
          X
        </button>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  user: PropTypes.shape({
    idUser: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};
