import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';

import {AuthContext} from './contexts/AuthContext.js'
import useLocalStorage from './hooks/useLocaleStorage.js';
import Main from './components/Main/Main.js';
import Loader from './components/Loader'

function App() {

  const [isLoading,setIsLoading] = useState("")
  const [user,setUser] = useLocalStorage('user',{

    _id: '',
    email: '',
    accessToken: '',

  });

  useEffect(() => {
    

    setIsLoading(<Main/>)

    
  },[])

  const login = (data) => {

    setUser(data)

  }

  const logout = () =>{

    

  }


  return (
    <div className="App">
      
      <AuthContext.Provider value={{user,login}}>
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
