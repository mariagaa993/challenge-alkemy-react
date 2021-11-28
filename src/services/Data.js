import axios from 'axios';
import heroApi from '../utils/url';

const TOKEN = process.env.REACT_APP_TOKEN;

export const getData = async (input) => {
    try {
        const data = await axios.get(`${heroApi}/${TOKEN}/search/${input}`)
        return data.data.results;
    }
    catch(err) {
        throw new Error(`Unhandled : ${err}`);
    }
}
