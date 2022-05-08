import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

export default function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };

  const [form, setForm] = useState({});

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  function handleValidate() {
    const errors = {};
    if (!form.email) {
      errors.email = "Required";
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
      console.log("code");
    }
    if (!form.name) {
      errors.name = "Required";
    }
    if (!form.phone) {
      errors.phone = "Required";
    }
    return errors;
  }

  function handleSubmit() {
    alert("Login in successfully!!!");
  }

  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${
                errors.name ? "custom-input-error" : ""
              }`}
            >
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.name}</p>
            </div>
            
            <div
              className={`custom-input ${
                errors.email ? "custom-input-error" : ""
              }`}
            >
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.email}</p>
            </div>

            <div
              className={`custom-input ${
                errors.phone ? "custom-input-error" : ""
              }`}
            >
              <label>Phone</label>
              <input
                type="number"
                name="phone"
                value={form.phone || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.phone}</p>
            </div>
            <div
              className={`custom-input ${
                errors.message ? "custom-input-error" : ""
              }`}
            >
              <label>Message</label>
              {/* <input
                type="textArea"
                name="message"
                value={form.message || ""}
                onChange={handleChange}
              /> */}
              <textarea
               name="message"
                value={form.message || ""}
                onChange={handleChange}
              ></textarea>
              <p className="error">{errors.message}</p>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}