import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "Sailab",
  email: "",
  channel: "",
  comments: "",
  social: {
    facebook: "",
    Linkedin: ""
  }
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!!"),
  email: Yup.string().required("Required!!"),
  channel: Yup.string().required("Required!!"),
  comments: Yup.string().required("Required!!"),
  social: Yup.string().required("Required!!")
  // Linkedin: Yup.string().required("Required!!")
});

const NewForm = () => {
  debugger;

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div className="form-control">
            <div className="ui label">Name</div>
            <div className="ui input">
              <Field type="text" name="name" id="name" />
            </div>
            <ErrorMessage name="name">
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </ErrorMessage>
          </div>
          <div className="form-control">
            <div className="ui label">Email</div>
            <div className="ui input">
              <Field type="text" name="email" id="email" />
            </div>
            <ErrorMessage name="email" />
          </div>
          <div className="form-control">
            <div className="ui label">Channel</div>
            <div className="ui input">
              <Field type="text" name="channel" id="channel" />
            </div>
            <ErrorMessage name="channel" />
          </div>

          <div className="form-control">
            <div className="ui label">Comments</div>
            <div className="ui input">
              <Field as="textarea" name="comments" id="comments" />
            </div>
            <ErrorMessage name="comments" />
          </div>

          <div className="form-control">
            <div className="ui label">Facebook</div>
            <div className="ui input">
              <Field name="social.facebook" id="social.facebook" />
            </div>
            <ErrorMessage name="social.facebook" />
          </div>

          <div className="form-control">
            <div className="ui label">Linkedin</div>
            <div className="ui input">
              <Field name="social.Linkedin" id="social.Linkedin" />
            </div>
            <ErrorMessage name="Linkedin" />
          </div>

          <button type="submit">SUBMIT</button>
        </Form>
      </Formik>
    </>
  );
};
export default NewForm;
