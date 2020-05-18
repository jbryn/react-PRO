/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import UsersContext from "../../../context/users-context";

const AddUserForm = () => {
  const { dispatch } = useContext(UsersContext);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch({
        type: "ADD",
        firstName: values.firstName,
        lastName: values.lastName,
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <button type="submit" className="btn">
        ADD USER
      </button>
    </form>
  );
};

export default AddUserForm;
