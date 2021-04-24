import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { number } from "yup/lib/locale";
const Login = () => {
  const initialvalues = {
    email: "",
    password: ""
  };
  const onSubmit = (values) => {
    // debugger;
    const { email, password } = values;
    if (email === "sailab98@gmail.com" && password === "12345") {
      console.log("Login Succesful");
    }
    console.log(values);
  };
  // const handleSubmit = () => {
  //   debugger;
  //   return <div>"Login Successful"</div>;
  // };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    phone: Yup.number().required("Required")
  });

  return (
    <>
      <Formik initialValues={initialvalues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
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
                  <div>{msg === "Required" ? <div>"Required"</div> : "Phone must be number"}</div>
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
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
export default Login;
