import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.scss';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
        <Footer/>    
    </div>
  );
}

export default App;
