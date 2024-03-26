import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './component/About';
import Explain from './component/Explain';
import Courses from './component/Courses';
import Faq from './component/Faq';
import Testimonial from './component/Testimonial';

import CustomNavbar from './component/Navbar';
import Homepage from './component/Homepage';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/explain" element={<Explain />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
