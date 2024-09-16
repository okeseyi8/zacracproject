import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Form } from './pages/Form';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import './App.css';




function App() {
  return (
    <div className='App relative w-screen'>
      <Router className='relative'>
     <Navbar className="" />
      
     <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/form' element={<Form />}></Route>
      
       
      </Routes>
      {/* <Footer /> */}
    </Router>
    </div>
  );
}

export default App;
