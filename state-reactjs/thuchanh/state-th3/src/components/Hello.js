import  { Component } from 'react';
 
class Hello extends Component {
 
  componentWillUnmount() {
    alert('The component is going to be unmounted');
  }
 
  render() {
    return  <h1>Hiện thông báo sau khi ẩn component</h1>;
  }
}
 
export default Hello;