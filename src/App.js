import './App.css';
import react from 'react';
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/products' element={<Products/>} />
          <Route exact path='/sign-up' element={<SignUp/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
