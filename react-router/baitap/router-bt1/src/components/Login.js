import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login  (){
  let navigate = useNavigate();

  const [form, setForm] = useState({})

  function handleChange (event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
   
  }
  function handleSubmit(event) {
    // const isValid =  form.email && form.password;
    // alert(isValid ? 'Sign in success!!!' : 'Please fill out the form!!!')
    console.log(form)
    navigate("/home", {state:{email: event.target.value} } )
    console.log(navigate)
  }
    return (
        <div>
          <h1>Sign up</h1>
          <form >
            <div className="custom-input">
              <label>Email </label>
              <input name="email" value={form.email || ''} onChange={e =>handleSubmit(e)} />
            </div>
            <div className="custom-input">
              <label>Password </label>
              <input type="password" name="password" value={form.password || ''} onChange={handleChange}/>
            </div>
            <button type="button"   >Submit</button>
          </form>
        </div>
      )
}

export default Login;