import TextInput from "./TextInput";
import CheckBox from "./Checkbox";
import * as Yup from "yup";
import Select from "./Select";
import { Formik, Form } from "formik";
const SignForm = () => {
  const initialvalues = {
    firstname: "",
    lastname: "",
    email: "",
    role: "",
    check: false
  };
  const onSubmit = (values) => {
    console.log("Data:", values);
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Required!"),
    lastname: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    check: Yup.boolean().oneOf([true], "You must accept terms and conditions"),
    role: Yup.string().oneOf(["architect", "developer", "engineer", "other"], null)
  });
  return (
    <>
      <Formik initialValues={initialvalues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
          <h1>Subscribe!</h1>
          <TextInput name="firstname" label="First Name" type="text" />
          <TextInput name="lastname" label="Last Name" type="text" />
          <TextInput name="lastname" label="Last Name" type="text" />
          <Select name="select" label="Role">
            <option value="architect">Architect</option>
            <option value="developer">Developer</option>
            <option value="engineer">Engineer</option>
            <option value="other">Other</option>
          </Select>
          <CheckBox type="checkbox" name="check"></CheckBox>
        </Form>
      </Formik>
    </>
  );
};

export default SignForm;
