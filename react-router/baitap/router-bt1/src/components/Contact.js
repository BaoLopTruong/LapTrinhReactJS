import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Contact() {
  let navigate = useNavigate();
  const [form, setForm] = useState({});

//   const sendDataToProduct = event => {
//     navigate("/about", { state: { email: event.target.value } });

//   };
  const sendDataToProduct2 = () => {
    navigate("/about", { state: { form: form } });

  };
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
   
  }

  return (
    <>
      <h2>Select a Category:</h2>
      <form >
            <div className="custom-input">
              <label>Email </label>
              <input name="email" onChange={e =>handleChange(e)} />
            </div>
            <div className="custom-input">
              <label>Email </label>
              <input name="text" onChange={e =>handleChange(e)} />
            </div>
                <button type="submit" onClick={sendDataToProduct2}>Submit</button>
          </form>
    </>
  );
}

export default Contact;