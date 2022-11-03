import './App.css';
import Linktree from './components/Linktree';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Linktree/>}/>
          <Route path='/contact' element={<Contact/>}/> 
        </Routes>    
      </div>
    </BrowserRouter>
  );
}

export default App;
