import axios from 'axios';
import LOGIN from '../utils/login';

export const getToken = (data) => {
    return (
        axios({
            method: 'POST',
            url: LOGIN,
            data: data
        })
        .then(response => response.data.token)
        .then(data => {
            localStorage.setItem('token', data)
            return true;
        })
        .catch(err => {
            return false;
        })
    );
}
