
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './components/Product';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  return (
    
    <Routes>
    <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Product />} />

    </Routes>

  );
}



export default App;
