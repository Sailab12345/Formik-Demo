import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "Sailab",
  email: "",
  channel: ""
};

const onSubmit = (values) => {
  debugger;
  console.log("Form Data:", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!!"),
  email: Yup.string().required("Required!!"),
  channel: Yup.string().required("Required!!")
});

const Form = () => {
  debugger;
  <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} />;
  return (
    <>
      <Form>
        <div className="form-control">
          <div className="ui label">Name</div>
          <div className="ui input">
            <Field type="text" name="name" id="name" />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <div className="ui label">Email</div>
          <div className="ui input">
            <Field type="text" name="email" id="email" />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <div className="ui label">Channel</div>
          <div className="ui input">
            <Field type="text" name="channel" id="channel" />
          </div>
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <button type="submit">SUBMIT</button>
      </Form>
    </>
  );
};
export default Form;
