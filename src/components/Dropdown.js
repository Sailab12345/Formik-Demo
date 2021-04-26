import React, { Component, useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const Dropdown = () => {
  const [state, setState] = useState({ selectedOption: null });
  const onChange = (selectedOption) => {
    setState({ selectedOption });
    console.log("Value:", selectedOption);
  };
  return (
    <>
      <Select options={options} value={state.selectedOption} onChange={onChange} />
    </>
  );
};
export default Dropdown;
