
import './App.css';
import  { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
 
  increment = () => {
    this.setState({ number: this.state.number + 1 });
  }
  decrease = () => {
    this.setState({ number: this.state.number - 1 });
  }
 
  render() {
    return (
      <div style={{textAlign: "center", padding: 30}}>
      <h1>Đếm số lần click vào button</h1>
        <button onClick={this.increment}>Increment</button>
        <span style={{ padding: 10 }}>{ this.state.number }</span>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }
}

export default App;
