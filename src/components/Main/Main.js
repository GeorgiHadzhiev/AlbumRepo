import { Routes,Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';


export default function Main(){

    return(
        <>
            <Header />
            
            <AnimatePresence>


                <Routes>
                    <Route path="/" element={<Home />} />
        
                </Routes>
            

            </AnimatePresence>
            <Footer />
            
        </>

    )

}