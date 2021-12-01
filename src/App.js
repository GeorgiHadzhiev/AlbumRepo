import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';

import {AuthContext} from './contexts/AuthContext.js'
import Main from './components/Main/Main.js';
import Loader from './components/Loader'

function App() {

  const [isLoading,setIsLoading] = useState("")

  useEffect(() => {
    

    setIsLoading(<Main/>)

    
  },[])


  return (
    <div className="App">
      
      <AuthContext.Provider>
      {

        !isLoading 
        ?<Loader />
        :isLoading

      }
      </AuthContext.Provider>

    </div>
  );
}

export default App;
