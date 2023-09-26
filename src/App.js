import Navabr from './components/Navabr';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Service from './components/Service';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <>
      <Navabr/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/service' element={<Service />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>

      </Routes>
    </>
  );
}

export default App;
