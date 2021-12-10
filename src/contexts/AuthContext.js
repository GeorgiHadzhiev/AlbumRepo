import { createContext } from "react";
import useLocalStorage from "../hooks/useLocaleStorage.js";

export const AuthContext = createContext();

const initialState = {

    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    accessToken: '',
  
}

export function AuthProvder({children}){
    
    const [user,setUser] = useLocalStorage('user', initialState)

    const login = (data) => {
    
        setUser(data)
    
    }
    
    const logout = () => {
    
        setUser(initialState);
    
    }

    return(

        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>

    )

}