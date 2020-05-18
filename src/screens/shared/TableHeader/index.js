import React, { useContext } from "react";
import PropTypes from "prop-types";
import UsersContext from "../../../context/users-context";

const orderByFname = (a, b) => {
  const fnameA = a.firstName.toUpperCase();
  const fnameB = b.firstName.toUpperCase();
  let comparison = 0;
  if (fnameA > fnameB) comparison = 1;
  else if (fnameA < fnameB) comparison = -1;
  return comparison;
};

const orderByLname = (a, b) => {
  const lnameA = a.lastName.toUpperCase();
  const lnameB = b.lastName.toUpperCase();
  let comparison = 0;
  if (lnameA > lnameB) comparison = 1;
  else if (lnameA < lnameB) comparison = -1;
  return comparison;
};

function TableHeader({ columnsNames }) {
  const { setOrderBy } = useContext(UsersContext);

  return (
    <thead>
      <tr>
        {columnsNames.map((c) => (
          <th key={c}>
            <button
              type="button"
              className="waves-effect waves-teal btn-flat"
              onClick={() => {
                if (c === "first name") {
                  setOrderBy(() => orderByFname);
                } else if (c === "last name") {
                  setOrderBy(() => orderByLname);
                } else if (c === "id user") {
                  setOrderBy(() => (a, b) => a.idUser - b.idUser);
                }
              }}
            >
              {c}
            </button>
          </th>
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  columnsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHeader;
