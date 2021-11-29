import { Routes,Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from '../Header';
import Home from '../Home';
import Login from '../Login';


export default function Main(){

    return(
        <>
            <AnimatePresence>
            <Header key={'Header'} />


                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                
        
                </Routes>
            

            </AnimatePresence>
            
        </>

    )

}