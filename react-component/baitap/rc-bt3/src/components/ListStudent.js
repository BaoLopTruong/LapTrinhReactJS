import { Component } from "react";
class ListStudent extends Component {
    render(){
      return(
       <tr>
         <td>{this.props.student.id}</td>
         <td>{this.props.student.name}</td>
         <td>{this.props.student.age}</td>
         <td>{this.props.student.address}</td>
       </tr>
      );
    }
 }

 export default ListStudent;