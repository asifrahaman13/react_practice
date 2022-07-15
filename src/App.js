import './App.css';
import Error from "./Components/Error.jsx";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import Footer from './Components/Footer';
import Contact from "./Components/Contact.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/About" element={<About />} />
        <Route element={<Error />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
