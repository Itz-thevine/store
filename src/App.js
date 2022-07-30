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
import AddProfileImage from './page/AddProfileImage';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path='/' exact element={<Home/>} />
       <Route path='/:id' exact element={<SingleProduct/>}/>
       <Route path='/contact' exact element={<Contact/>}/>
       <Route path='/login' exact element={<Login/>}/>
       <Route path='/signup' exact element={<SignUp/>}/>
       <Route path='/about' exact element={<About/>}/>
       
       <Route path='/:userID' element={<Signed/>}>
        <Route path='/:userID/cart' element={<Cart/>}/>
        <Route path='/:userID/add-profile-image' element={<AddProfileImage/>}/>
       </Route>
     </Routes>
    </div>
  );
}

export default App;
