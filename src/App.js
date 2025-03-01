import { Routes, Route, Navigate } from 'react-router-dom';
import {Box} from "@mui/material";
import Home from './Home';
import Footer from './Footer';
import OurProducts from './OurProducts';
import About from './About';
import WhyUs from './WhyUs';
import Contact from './Contact';
import "./App.css";
import NavBar from './NavBar';

function App() {
  return (
    <> 
    <Box
       sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", 
        }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/contact" element ={<Contact />} />
      </Routes>
      <Footer />
      </Box>
    </>
  );
}

export default App;
