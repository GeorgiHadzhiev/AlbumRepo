import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import { Routes,Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import {AuthProvder} from './contexts/AuthContext.js'

import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import MyAlbums from './components/MyAlbums';
import Catalog from './components/Catalog';
import Add from './components/Add';
import Details from './components/Details';
import Edit from './components/Edit';
import Logout from './components/Logout';
import ErrorPage from './components/404';
import Footer from './components/Footer';


function App() {

  return (
    <AuthProvder>

      <div className="App">

        <Header />
            
        <AnimatePresence>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/MyAlbums" element={<MyAlbums />} />
              <Route path="/add" element={<Add />} />
              <Route path="/details/:albumId" element={<Details />} />
              <Route path="/edit/:albumId" element={<Edit />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<ErrorPage />} />

    
            </Routes>
        
        </AnimatePresence>
        <Footer />


      </div>

    </AuthProvder>
  );
}

export default App;