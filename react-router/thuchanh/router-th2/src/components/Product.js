import {useParams} from 'react-router-dom';

function Product(){
  let {categoryId }= useParams();
  return(
    <div>
      <h2> Id Selected: {categoryId}</h2>
    </div>
  )
}

export default Product;