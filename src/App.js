import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Header from './component/header/Header';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Cart from './page/Cart';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path='/' exact element={<Home/>} />
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/signup' element={<SignUp/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/cart' element={<Cart/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
