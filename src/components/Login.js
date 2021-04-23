import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
const Login = () => {
  const initialvalues = {
    email: "",
    password: ""
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required")
  });

  return (
    <>
      <Formik initialValues={initialvalues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
          <h1>Login</h1>
          <label>Email</label>
          <div>
            <Field name="email" type="email" />
            <div>
              <ErrorMessage name="email" />
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default Login;
