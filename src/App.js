import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Header from './component/header/Header';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Cart from './page/Cart';
import SingleProduct from './page/SingleProduct';
import Signed from './page/Signed';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path='/' exact element={<Home/>} />
       <Route path='/:id' exact element={<SingleProduct/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/about' element={<About/>}/>
       
       <Route path='/cart' element={<Signed/>}>
        <Route path='' element={<Cart/>}/>
        
       </Route>

     </Routes>
    </div>
  );
}

export default App;
