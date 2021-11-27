import { useHistory } from 'react-router-dom';

export const useAuthenticated = () => {   
    if(localStorage.getItem('token') !== null) return true;
    return false;
}

export const useRemoveAuthenticated = () => { 
    const history = useHistory();
   
    const removeToken = () => {
        localStorage.removeItem('token')
        history.push(`/login`)

    }
    return [removeToken]
}
