import { useContext } from 'react';

import {AuthContext} from '../contexts/AuthContext.js'
import { Navigate } from 'react-router';


export const routeGuard = (Component) =>{

    const WrapperComponent = (props) => {

        const {user} = useContext(AuthContext);
        

        return user.email
            ? <Component {...props} />
            : <Navigate to="/" />

    }

    return WrapperComponent;

};