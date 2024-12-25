import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { Home } from "./components/Home";
import About from "./components/About";
import Notes from "./components/Notes";
import NoteState from "./context/notes/NoteState";
import OneNote from "./components/OneNote";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNote from "./components/AddNote";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <NavBar></NavBar>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/mynotes" element={<Notes />} />
              <Route exact path="/onenote" element={<OneNote/>} />
              <Route exact path="/addnote" element={<AddNote/>}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
