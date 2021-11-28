import { Container } from 'react-bootstrap';
import '../scss/components/header.scss';

const Header = ({children}) => {
    
    return (
        <Container fluid className='header'>
            <h1>SuperHeros App!</h1>
            {children}
        </Container>
    ) 
}

export default Header;
