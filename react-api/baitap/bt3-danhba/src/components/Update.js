import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function UpdateContact() {
  const { contactId } = useParams();
  const isCreate = !contactId;
  const [contact, setContact] = useState({});

  useEffect(() => {
    if (contactId) {
      axios
        .get(`http://localhost:3001/danhba/${contactId}`)
        .then(res => {
          console.log(contactId)
          setContact(res.data);
        })
        .catch(err => {
          throw err;
        });
    }
  });

  function handleChangeImage(event) {
      
    if(event.target.files && event.target.files[0]){
      // console.log(URL.createObjectURL(event.target.files[0]))
      //setContact({ image: URL.createObjectURL(event.target.files[0]) });
      let reader = new FileReader();
      reader.onload = (event) => {
        setContact({ image: event.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  function handleChange(event) {
 
      setContact({
        ...contact,
        [event.target.name]: event.target.value
      });
    
  }

  function handleSubmit() {
    axios
      .put(`http://localhost:3001/danhba/${contactId}`, contact)
      .then(res => {
        alert(
          `${isCreate ? "Create" : "Edit"} contact ${JSON.stringify(
            res.data
          )} successfully!!!`
        );
        window.location.href = "/";
        console.log(res)

      })
      .catch(err => {
        throw err;
      })
  }


  return (
    <div>
        <h1>Update </h1>
        <form>
          <div>
            <label>Id:</label>
            <input style={{marginLeft: "55px"}} name="id" value={contact.id || ""} onChange={handleChange} />
          </div>
          <br></br>
          <div>
            <label>Name:</label>
            <input style={{marginLeft: "26px"}} name="name" value={contact.name || ""} onChange={handleChange} />
          </div>
          <br></br>
          <div>
            <label>Image:</label>
            <input type='file' style={{marginLeft: "26px"}} name="image"  onChange={handleChangeImage} />
          </div>
          <br></br>
          <div>
            <label>Email:</label>
            <input style={{marginLeft: "31px"}} name="email" value={contact.email || ""} onChange={handleChange} />
          </div>
          <br></br>
          <div>
            <label>Phone:</label>
            <input style={{marginLeft: "26px"}} name="phone" value={contact.phone || ""} onChange={handleChange} />
          </div>
          <br></br>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
  );
}