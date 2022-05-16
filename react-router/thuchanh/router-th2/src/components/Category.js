import {useNavigate} from 'react-router-dom';

function Categorry(){
  let navigate =useNavigate();
  const sendData = (event) =>{
    navigate(`/product/${event.target.value}`);
  };
    return(
      <div>
        <h2>
          Select Categorry
        </h2>
        <select onChange={(e) =>{sendData(e)}}>
        <option value=""> Choose your car</option>
        <option value="1">Honda</option>
        <option value="2"> Suzuki</option>
        <option value="3"> Yamaha</option>



        </select>
      </div>
    )
}
export default Categorry;