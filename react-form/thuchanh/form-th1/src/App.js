import {useState} from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState([]);

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
                            <input type="text" id="form3Example1c" className="form-control" name="username" value={form.username || ''} onChange={handleChange} />
                            <label className="form-label" htmlFor={"form3Example1c"}>Your Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" name="email"  value={form.email || ''} onChange={handleChange}/>
                            <label className="form-label" htmlFor={"form3Example3c"}>Your Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control" name="password" value={form.password || ''}  onChange={handleChange}/>
                            <label className="form-label" htmlFor={"form3Example4c"}>Password</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4cd" className="form-control" name="confirmPassword" value={form.confirmPassword || ''} onChange={handleChange}/>
                            <label className="form-label" htmlFor={"form3Example4cd"}>Confirm password</label>
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
