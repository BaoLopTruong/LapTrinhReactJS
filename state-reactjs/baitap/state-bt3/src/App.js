import  { Component } from 'react';
 
class App extends Component{
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      item:'',
    };
  }
 
  handleChange = (event) => {
    this.setState({item: event.target.value});
  }
  
  handleAddItem = () => {
    
    if(this.state.item){
      
      const newList = this.state.list;
      newList.push(this.state.item);
      this.setState({list: newList, item: '',});
     
    }
  }
  
  render () {
    const { list, item } = this.state
    return (
      <div style={{textAlign: 'center'}}>
        <div>
            <h1>Ứng dụng quản lý công việc (Todo App)</h1>
            <input value={item} onChange={this.handleChange} />
            <button onClick={this.handleAddItem}>Add</button>
            { list.map((item, index) => (
                <p key={index}>
                  {index+1}: {item}
                </p>
              )) }
        </div>
      </div>
    )
  }
}
 
export default App;