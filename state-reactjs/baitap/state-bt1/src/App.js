import React, { Component } from 'react';
 
class App extends Component{
  constructor (props) {
    super(props)
    this.state = {
      keypressed : ''
    };
  }
 
  handler = (e) => {
    this.setState({keypressed: e.key});
  };
  
  render () {
    return (
      <div style={{ textAlign: 'center' }}>
      <h1>Kiểm tra button nhập vào</h1>
        <p>Key pressed is: {this.state.keypressed}</p>
        <input type="text" onKeyPress={(e) => this.handler(e)} />
      </div>
    )
  }
}
 

export default App;
