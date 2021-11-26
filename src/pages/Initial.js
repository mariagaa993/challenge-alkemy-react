import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../components/Footer';

const Initial = () => {
    return (
        <Container fluid>  
            <h1>Welcome to Superhero App</h1> 
            <Link to='/login'>
                <Button title='Login' variant="primary" />
            </Link>
            <Footer />  
        </Container>
    )
}

export default Initial;
