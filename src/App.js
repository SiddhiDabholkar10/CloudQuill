
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
   <>
    <NoteState>
      <Router>
        <NavBar></NavBar>
        
        <Routes>
          
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
     
    </NoteState>
    
   </>
   
  );
}

export default App;
 