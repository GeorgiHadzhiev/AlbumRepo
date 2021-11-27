import { Routes,Route } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog';
import Albums from './components/Albums'
import Contact from './components/Contact';

function App() {
  
  return (
    <div className="App">
    
      <div className="loader_bg">
        <div className="loader"><img src="images/loading.gif" alt="#" /></div>
      </div>

      <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        



      </Routes>


    <Footer />

                           
    </div>
  );
}

export default App;