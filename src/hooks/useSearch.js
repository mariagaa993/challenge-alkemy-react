import { useState } from 'react';

export const useInputValue = (handleSearch) => {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(!input) {
            alert('No puede estar vacío')
            return;
        } 

        handleSearch(input)
        setInput('');
    }

    return [input, handleChange, handleSubmit];
}

export const useGetResults = () => {
    const [results, setResults] = useState([]);

    const handleSearch = input => {
        fetch(`https://www.superheroapi.com/api.php/670221417697610/search/${input}`)
        .then(res => res.json())
        .then(data => data.results !== undefined ? setResults(data.results) : alert('No existe!'));
    }

    return [results, handleSearch];
}
