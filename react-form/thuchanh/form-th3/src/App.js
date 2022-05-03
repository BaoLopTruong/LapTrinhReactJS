import {useEffect, useState} from 'react';
import './App.css';

function App() {

  const MESSAGE_ERROR = {
    email: 'Email error',
	  password: 'Password error'
  }

  const REGEX = {
	  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	  password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
  }

  const [form, setForm] = useState({})

  function handleChange(event) {
    let error = REGEX[event.target.name].test(event.target.value) ? '' : MESSAGE_ERROR[event.target.name]
    setForm({
      ...form,
      [event.target.name]: { value: event.target.value, error: error }
    })
  }
 
  function handleSubmit() {
    const isValid = form.email.value && form.password.value
    const isError = form.email.error || form.password.error
    alert(isValid && isError ? 'Login in success!!!' : 'Please fill out the form!!!')
  }
  useEffect(() =>{
    console.log(form);
  })


  return (
    <div className="App">
   <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-50">
      <div style={{textAlign: 'center'}}>
        <h1>Login</h1>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
          <div className="form-outline mb-4">
            <input type="email" id="form1Example13" className="form-control form-control-lg"  name="email" value={(form.email && form.email.value) || ''} onChange={handleChange}/>
            <label className="form-label" htmlFor="form1Example13">Email address</label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="form1Example23" className="form-control form-control-lg" name="password" value={(form.password && form.password.value) || ''} onChange={handleChange} />
            <label className="form-label" htmlFor="form1Example23">Password</label>
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">
     
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3"  />
              <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          <div style={{textAlign: 'center'}}>
          <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>Sign in</button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>
          <div style={{textAlign: 'center'}}>
          <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#3b5998"}} href="#!"
            role="button">
            <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#55acee"}} href="#!"
            role="button">
            <i className="fab fa-twitter me-2"></i>Continue with Twitter</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default App;
