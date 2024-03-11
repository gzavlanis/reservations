import Afroditi from "./calendars/afroditi";
import { Routes, Route } from "react-router-dom";
import Chris from "./calendars/chris";
import Home from "./calendars/home";
import Login from "./authenticator/login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/afroditi" element={<Afroditi/>} />
        <Route path="/chris" element={<Chris/>} />
      </Routes>
    </div>
  );
}

export default App;