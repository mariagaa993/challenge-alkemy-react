export const useAuthenticated = () => {   
    if(localStorage.getItem('token') !== null) return true;
    return false;
}

export const useRemoveAuthenticated = () => { 
   
    const removeToken = () => {
        localStorage.removeItem('token')
        console.log('click')
    }

    return [removeToken]
}
