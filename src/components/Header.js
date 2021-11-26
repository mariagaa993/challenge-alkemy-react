import { Container } from 'react-bootstrap';

const Header = ({children}) => {
    
    return (
        <Container fluid>
            <h1>Superheros</h1>
            {children}
        </Container>
    ) 
}

export default Header;
