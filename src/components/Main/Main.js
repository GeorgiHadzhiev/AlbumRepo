import { Routes,Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import Login from '../Login';


export default function Main(){

    return(
        <>
            <Header />

            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            
    
            </Routes>
        </>

    )

}