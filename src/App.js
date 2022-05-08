import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
import Header from './component/header/Header';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       <Route path='/taskfive' element={<Home/>} />
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/about' element={<About/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
