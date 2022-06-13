
import './App.css';
import {useState, useEffect} from 'react'
function App() {



  const [form, setForm] = useState({})

  function handleChange(event) {
   let error = "red";
    setForm({
      ...form,
      [event.target.name]: { value: event.target.value, error: error }
    })
  }
 
  function handleSubmit() {
    const isValid = form.nameto.value && form.title.value && form.message.value && form.file.value
    const isError = form.nameto.error || form.title.error || form.message.error || form.file.error
    alert(isValid && isError ? 'Login in success!!!' : 'Please fill out the form!!!')
  }
  useEffect(() =>{
    console.log(form.nameto);
  });

  return (
    <div className="App">
      <form>
        <h2>Mail Form</h2>
        <br></br>
        <label>To</label>
        <br></br>
        <input type='text' name='nameto' value={(form.nameto && form.nameto.value) || ''} onChange={handleChange}></input>
        <br></br>
        <label>Title</label>
        <br></br>
        <input type='text' name='title' value={(form.title && form.title.value) || ''} onChange={handleChange}></input>
        <br></br>
        <label>Message</label>
        <br></br>
        <textarea name='message' value={(form.message && form.message.value) || ''} onChange={handleChange}> </textarea>
        <br></br>
        <input type='file' name='file' value={(form.file && form.file.value) || ''} onChange={handleChange}></input>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
        <div className={`custom-input ${  form.nameto ? "custom-input-error" : "" }`} >  </div>
      </form>
    </div>
  );
}

export default App;
