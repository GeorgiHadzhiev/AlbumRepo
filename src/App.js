import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import { AnimatePresence,motion } from 'framer-motion';

import Main from './components/Main/Main.js';
import Loader from './components/Loader'

function App() {

  const [isLoading,setIsLoading] = useState("")

  useEffect(() => {
    setTimeout(() =>{

      setIsLoading(<Main/>)

    },2500)


  },[])


  return (
    <div className="App">
      
      <>{!isLoading ? <Loader /> : isLoading}</>

    </div>
  );
}

export default App;
