import { useField } from "formik";
import React from "react";

const CheckBox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <input {...field} {...props} type="checkbox" />
      <label className="checkbox">I have read all terms and conditions</label>
      {meta.error && meta.touched ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export default CheckBox;
