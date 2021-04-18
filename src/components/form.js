import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: "Sailab",
  email: "",
  channel: ""
};

const onSubmit = (values) => {
  console.log("Form Data:", values);
};

const validation = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};
const Form = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validation
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <div className="ui label">Name</div>
          <div className="ui input">
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>
        <div className="form-control">
          <div className="ui label">Email</div>
          <div className="ui input">
            <input
              type="text"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>
        <div className="form-control">
          <div className="ui label">Channel</div>
          <div className="ui input">
            <input
              type="text"
              name="channel"
              id="channel"
              value={formik.values.channel}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};
export default Form;
