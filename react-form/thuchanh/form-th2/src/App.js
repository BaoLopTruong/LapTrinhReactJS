import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({});
  const MESSAGE_ERROR = {
    username: 'Username error',
    email: 'Email error',
	  password: 'Password error',
	  confirmPassword: 'Password must be the same'
  }

  const REGEX = {
    username: /^[a-zA-Z]{2,}$/,
	  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	  password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
  }
  function handleChange(event) {
    let error = ''
    if (event.target.name === 'password') {
      if (form.confirmPassword && form.confirmPassword.value) {
        error = event.target.value === form.confirmPassword.value ? '' : MESSAGE_ERROR[event.target.name]
      } else {
        error = REGEX[event.target.name].test(event.target.value) ? '' : MESSAGE_ERROR[event.target.name]
      }
    } else if (event.target.name === 'confirmPassword') {
      error = event.target.value === form.password.value ? '' : MESSAGE_ERROR[event.target.name]
    } else {
      error = REGEX[event.target.name].test(event.target.value) ? '' : MESSAGE_ERROR[event.target.name]
    }
    setForm({
      ...form,
      [event.target.name]: { value: event.target.value, error: error }
    })
  }
 
  function handleSubmit() {
    const isValid = form.username.value && form.email.value && form.password.value && form.confirmPassword.value
    const isError = form.username.error || form.email.error || form.password.error || form.confirmPassword.error
    alert(isValid && isError ? 'Sign in success!!!' : 'Please fill out the form!!!')
  }
  useEffect(() =>{
    console.log(form);
  })
// (e)=>{setForm({form : e.target.value} )}
  return (
    <div>

      <section className="vh-100" style={{backgroundColor: "lightblue"}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: "25px"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor={"form3Example1c"}>Your Name</label>
                            <input type="text" id="form3Example1c" className="form-control" name="username" value={(form.username && form.username.value) || ''} 
                             onChange={handleChange} />
                             {form.username && form.username.error && <p className="error">Username error</p>}
                            
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor={"form3Example3c"}>Your Email</label>
                            <input type="email" id="form3Example3c" className="form-control" name="email"  value={(form.email && form.email.value) || ''} onChange={handleChange}/>
                            {form.email && form.email.error && <p className="error">Email error</p>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor={"form3Example4c"}>Password</label>
                            <input type="password" id="form3Example4c" className="form-control" name="password" value={(form.password && form.password.value) || ''}  onChange={handleChange}/>
                            {form.password && form.password.error && <p className="error">Password error</p>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor={"form3Example4cd"}>Confirm password</label>
                            <input type="password" id="form3Example4cd" className="form-control" name="confirmPassword" value={(form.confirmPassword && form.confirmPassword.value) || ''} onChange={handleChange}/>
                            {form.confirmPassword && form.confirmPassword.error && <p className="error">Confirm password error</p>}
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                          <label className="form-check-label" htmlFor={"form2Example3"}>
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" onClick={handleSubmit}>Submit</button>
                        </div>

                      </form>

                    </div>
        
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
