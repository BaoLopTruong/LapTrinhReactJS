import { Component } from 'react';
import './App.css';

function App(){
  return (
    <div>
      <Header/>
      <Content/>
    </div>
  );
}
 
class Header extends Component {
  render() {
     return (
        <div>
           <h1>Header</h1>
        </div>
     );
  }
}
class Content extends Component {
  constructor() {
    super();
    this.state = {
       data: 
       [
          {
             "id":1,
             "name":"NGUYEN VAN A",
             "class":"JAVA"
          },
          {
             "id":2,
             "name":"NGUYEN VAN B",
             "class":"PHP"
          },
          {
             "id":3,
             "name":"NGUYEN VAN C",
             "class":"JAVA"
          }
       ]
    }
  }
  render() {
     return (
        <div>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <ListStudent key = {i} 
                     data = {person} />)}
               </tbody>
            </table>
        </div>
     );
  }
}
 
class ListStudent extends Component {
   render(){
     return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.class}</td>
      </tr>
     );
   }
}
 

export default App;
