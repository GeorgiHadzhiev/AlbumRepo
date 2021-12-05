import 'bootstrap/dist/css/bootstrap.min.css';

import {AuthContext} from './contexts/AuthContext.js'
import useLocalStorage from './hooks/useLocaleStorage.js';
import Main from './components/Main/Main.js';

const initialState = {

  _id: '',
  email: '',
  accessToken: '',

}

function App() {

  const [user,setUser] = useLocalStorage('user', initialState)

  const login = (data) => {

    setUser(data)

  }

  const logout = () => {

    setUser(initialState);

  }

  return (
    <div className="App">
      
      <AuthContext.Provider value={{user,login,logout}}>

        <Main/>

      </AuthContext.Provider>

    </div>
  );
}

export default App;
