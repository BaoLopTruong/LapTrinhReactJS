import React, { useState } from 'react';
import "./form.css";

export default function Form () {
  const [form, setForm] = useState({})

  function handleChange (event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }
 
  function handleSubmit() {
    const isValid = form.username && form.email && form.password && form.confirmPassword
    alert(isValid ? 'Sign in success!!!' : 'Please fill out the form!!!')
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form>
        <div className="custom-input">
          <label>Username </label>
          <input name="username" value={form.username || ''} onChange={handleChange} />
        </div>
        <div className="custom-input">
          <label>Email </label>
          <input name="email" value={form.email || ''} onChange={handleChange} />
        </div>
        <div className="custom-input">
          <label>Password </label>
          <input type="password" name="password" value={form.password || ''} onChange={handleChange} />
        </div>
        <div className="custom-input">
          <label>Confirm password </label>
          <input type="password" name="confirmPassword" value={form.confirmPassword || ''} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}