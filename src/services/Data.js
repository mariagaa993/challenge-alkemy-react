import axios from 'axios';
import heroApi from '../utils/url';

export const getData = async (input) => {
    try{
        const data = await axios.get(`${heroApi}/search/${input}`)
        return data.data.results;
    }
    catch(err){
        throw new Error(`Unhandled : ${err}`);
    }
}
