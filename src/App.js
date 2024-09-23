import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Form } from './pages/Form';
import { SubmitSuccess } from './pages/Success';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import './App.css';
import Axios from 'axios'
import {useState, useEffect, createContext} from 'react';



export const Appcontext = createContext()
function App() {
  const [product, setProducts] = useState([]);
  useEffect(() =>{
    Axios.get('https://z-commerce-vv76.onrender.com/api/itemlist').then(
      (res) => {
        setProducts(res.data);
      }
    )
  }, [])

  return (
   <Appcontext.Provider value={{product, setProducts}}>
         <div className='App relative w-screen'>
      <Router className='relative'>
     <Navbar className="" />
      
     <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/form/:id' element={<Form />}></Route>
         <Route path='/form/success' element={<SubmitSuccess />}></Route>
      
       
      </Routes>
      {/* <Footer /> */}
    </Router>
    </div>
   </Appcontext.Provider>
  );
}

export default App;
