import { useState, useEffect } from 'react';
import { getData } from '../services/Data';

export const useInputValue = (handleSearch) => {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!input) {
            alert('It cant be empty!')
            return;
        } 

        handleSearch(input)
        setInput('');
    }

    return [input, handleChange, handleSubmit];
}

export const useGetResults = (setLoading) => {
    const [results, setResults] = useState([]);
   
    const handleSearch = (input) => {
        setLoading(true)
        const apiRequest = getData(input);
        apiRequest.then(data => {
            if(data !== undefined) {
                setResults(data)
                setLoading(false)
            } else {
                alert('The character does not exist. Find another!');
                setLoading(false)
            }
        }).catch(err => {
            alert(err)
        })
    }

    return [results, handleSearch];
}
