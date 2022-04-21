
import './App.css';
import  { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
    };
  }
 
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: 'pink' });
    }, 5000);
  }
 
  render() {
    return (
      <div>
      <h1 style={{textAlign: "center"}}>Thay đổi màu nền backgroundColor bằng setTimeout</h1>
        <div
          style={{
            backgroundColor: this.state.color,
            paddingTop: 20,
            width: 400,
            height: 80,
            margin: 'auto'
          }}
        />
      </div>
    );
  }
}

export default App;
