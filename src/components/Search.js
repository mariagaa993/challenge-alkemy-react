import { Form, InputGroup, FormControl } from 'react-bootstrap';
import Button from './Button';
import { useInputValue } from '../hooks/useSearch';
import '../scss/components/search.scss';

const Search = ({handleSearch}) => {
    const [ input, handleChange, handleSubmit ] = useInputValue(handleSearch);

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className='mb-3'>
                <FormControl
                    placeholder='Search your hero'
                    aria-label='Search your hero'
                    aria-describedby='Search your hero'
                    onChange={handleChange}
                    value={input}
                />
                <Button title='Search' className='search-button' type='submit' />  
            </InputGroup>
        </Form>
    )
}

export default Search;
