
import './App.css';
import  { Component } from 'react';
class App extends Component {
  constructor(){
    super();
    this.state= {
      color: "black"
    }
  }
componentDidMount(){
  console.log("compoentdidmount")
  setTimeout(() => {
    this.setState({color: "pink"});
    
  }, 3000);
}

  render(){
    console.log("render")
    return(
      <div style={{backgroundColor:this.state.color}}>
        <h3>  hello world</h3>
      </div>
    )
  }

}
export default App;
