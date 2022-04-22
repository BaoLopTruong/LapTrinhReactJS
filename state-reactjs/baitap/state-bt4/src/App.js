import { Component } from 'react';
import './App.css'

class App extends Component{
  constructor (props) {
    super(props);
    this.state = {
      studentList: [],
      form: {
        name: '',
        phone: '',
        email: ''
      },
      isValid: false,
      indexSelected: -1
    };
  }

  handleChange = (event) => {
    this.setState((state) => {
      const form = state.form
      form[event.target.name] = event.target.value
      return { form }
    }, () => this.checkInvalidForm())
  }

  handleSelect = (studentSelected, index) => {
    this.setState({
      form: JSON.parse(JSON.stringify(studentSelected)),
      indexSelected: index
    })
  }

  checkInvalidForm = () => {
    const { name, phone, email } = this.state.form
    const value = name && phone && email
    this.setState({
      isValid: value
    })
  }
  
  handleSubmit = () => {
    if(this.state.isValid){
      const newList = this.state.studentList
      if (this.state.indexSelected > -1) {
        newList.splice(this.state.indexSelected, 1, this.state.form)
      } else {
        newList.push(this.state.form)
      }
      const newForm = {
        name: '',
        phone: '',
        email: ''
      }
      this.setState({studentList: newList, form: newForm, isValid: false, indexSelected: -1})
    }
  }

  handleDelete = (index) => {
    const newList = this.state.studentList
    newList.splice(index, 1)
    this.setState({list: newList})
  }
  
  render () {
    const { studentList, form } = this.state
    return (
      <div>
        <div>
            <h1>Student List</h1>
            <div>
              <label>Name: </label>
              <input name="name" value={form.name} onChange={this.handleChange} />
            </div>
            <div>
              <label>Phone: </label>
              <input type="number" name="phone" value={form.phone} onChange={this.handleChange} />
            </div>
            <div>
              <label>Email: </label>
              <input name="email" value={form.email} onChange={this.handleChange} />
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { studentList.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.phone}</td>
                    <td>{student.email}</td>
                    <td>
                      <button onClick={this.handleSelect.bind(this, student, index)}>Edit</button>
                      <button onClick={this.handleDelete.bind(this, index)}>Delete</button>
                    </td>
                  </tr>
                )) }
              </tbody>
            </table>
        </div>
      </div>
    )
  }
}
 
export default App;