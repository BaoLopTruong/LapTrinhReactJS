import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Categorry from './components/Category';
import Product from './components/Product';
 
function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Categorry/>}></Route>
        <Route path='/product/:categoryId' element={<Product/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}
export default App;