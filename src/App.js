import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import './App.css';




function App() {
  return (
    <div className='App'>
      <Router >
     <Navbar/>
      
     <Routes>
         <Route path='/' element={<Home />}></Route>
      
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
