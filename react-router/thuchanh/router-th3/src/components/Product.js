import { useLocation } from "react-router-dom";
function Product() {
  const { state } = useLocation();

  return (
    <div>
      <h3>Id selected {state.categoryId} </h3>
    </div>
  );
}

export default Product;