// src/exercise/FormComponent.js
import React from "react";
import useForm from "./useForm";

function FormComponent() {
  const { values, handleChange, resetForm } = useForm({ name: "", email: "" });

  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
