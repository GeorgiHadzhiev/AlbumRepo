import { Routes,Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from '../Header';
import Home from '../Home';
import Register from '../Register';
import MyAlbums from '../MyAlbums';
import Catalog from '../Catalog';
import Add from '../Add';
import Details from '../Details';
import Edit from '../Edit';
import Logout from '../Logout';
import Footer from '../Footer';


export default function Main(){


    return(
        <>
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

        
                </Routes>
            
            </AnimatePresence>
            <Footer />
            
        </>

    )

}