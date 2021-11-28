import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

const Initial = () => {
    return (
        <Container fluid className='container-error'>  
            <FontAwesomeIcon className='error-icon' icon={faFrown} />
            <h1 className='error-title'>404</h1> 
            <p className='error-p'>Page not found</p>
            <small>The Page you are looking for doesn't exist or an other error occurred.
                Go back or choose a new direction.</small>  
        </Container>
    )
}

export default Initial;
