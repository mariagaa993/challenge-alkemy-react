import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../components/Footer';

const Initial = () => {
    return (
        <>  
            <Container className='initial-container'>  
                <h1 className='initial-title'>Welcome to SuperHero App</h1> 
                <p className='initial-p'>Have fun creating a team of heroes and villains together</p> 
                <Link to='/login'>
                    <Button className='initial-button' title='Login' />
                </Link>
            </Container>
            <Footer />  
        </>  
    )
}

export default Initial;
