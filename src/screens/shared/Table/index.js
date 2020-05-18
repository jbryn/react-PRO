import React, { useContext } from "react";
// import PropTypes from "prop-types";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import UsersContext from "../../../context/users-context";

export default function Table() {
  const { users, orderBy } = useContext(UsersContext);

  return (
    <table>
      <TableHeader columnsNames={["id user", "first name", "last name"]} />
      <tbody>
        {users.sort(orderBy).map((u) => (
          <TableRow key={u.idUser} user={u} />
        ))}
      </tbody>
    </table>
  );
}

// Table.propTypes = {
//   // users: PropTypes.arrayOf(PropTypes.object).isRequired,
//   // setSelectedUser: PropTypes.func.isRequired,
//   selectedUser: PropTypes.shape({
//     idUser: PropTypes.number,
//     firstName: PropTypes.string,
//     lastName: PropTypes.string,
//   }).isRequired,
// };
