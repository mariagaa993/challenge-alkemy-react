import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

const Initial = () => {
    return (
        <Container fluid>  
            <FontAwesomeIcon icon={faFrown} />
            <h1>404</h1> 
            <p>Page not found</p>
            <small>The Page you are looking for doesn't exist or an other error occurred.
                Go back or choose a new direction.</small>  
        </Container>
    )
}

export default Initial;
