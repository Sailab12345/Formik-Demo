import { Formik, Form, formik, ErrorMessage, Field } from "formik";
import { useState } from "react";
import { useHistory } from "react-router";
import * as Yup from "yup";
import Dropdown from "./Dropdown";
import { number } from "yup/lib/locale";
const Login = () => {
  const [message, setMessage] = useState([""]);
  const history = useHistory();
  const initialvalues = {
    email: "",
    password: ""
  };
  const onSubmit = (values, onSubmitProps) => {
    // debugger;

    const { email, password } = values;
    if (email === "sailab98@gmail.com" && password === "12345") {
      setMessage("Login Successful");
      console.log(values);
      // history.push("www.wikipedia.com");
    } else {
      setMessage("Wrong Credentials");
    }
    onSubmitProps.resetForm();
  };
  // const handleReset = () => {
  //   if (!window.confirm("Reset?")) {
  //     throw new Error("Cancel reset");
  //   }
  // };
  // const handleSubmit = () => {
  //   debugger;
  //   return <div>"Login Successful"</div>;
  // };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    phone: Yup.number().required("Required"),
    select: Yup.string().required("Required!")
  });

  // const validate = (value) => {
  //   if (!value.phone) {
  //     return "Must be number";
  //   }
  // };

  return (
    <>
      <Formik initialValues={initialvalues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ isSubmitting }) => {
          return (
            <Form>
              <div className="ui segment">
                {" "}
                <h1>Login</h1>
                <label>Email</label>
                <div>
                  <Field name="email" type="email" />
                  <div style={{ marginBottom: "20px" }}>
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <label>Phone no.</label>
                <div>
                  <Field name="phone" />
                  <div style={{ marginBottom: "20px" }}>
                    <ErrorMessage name="phone">
                      {(msg) => (
                        <div>
                          {msg === "Required" ? <div>"Required"</div> : "Phone must be number"}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <label>Password</label>
                <div style={{ marginBottom: "20px" }}>
                  <Field name="password" type="password" />
                  <div>
                    <ErrorMessage name="password" />
                  </div>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <Field name="select" as={Dropdown} />
                  <div>
                    <ErrorMessage name="select" />
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
                <div>{message}</div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
export default Login;
