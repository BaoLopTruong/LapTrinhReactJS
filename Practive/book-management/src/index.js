import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from './components/Login/Login';


import "bootstrap/dist/css/bootstrap.min.css"

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<App />}></Route>
                {/* <Route exact path='/login' element={<Login />}></Route>
                 */}
                 <Route exact path='/login' element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    </Provider>

);
