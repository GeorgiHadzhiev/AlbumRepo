import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import AuthProvder from './contexts/AuthContext.js'
import Main from './components/Main/Main.js';


function App() {

  return (
    <AuthProvder>

      <div className="App">
        
        <Main/>

      </div>

    </AuthProvder>
  );
}

export default App;