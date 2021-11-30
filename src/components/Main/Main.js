import { Routes,Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from '../Header';
import Home from '../Home';
import Login from '../Login';
import Register from '../Register';
import Footer from '../Footer';


export default function Main(){

    return(
        <>
            <Header />
            
            <AnimatePresence>


                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                
        
                </Routes>
            

            </AnimatePresence>
            <Footer />
            
        </>

    )

}