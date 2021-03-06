import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import LoginComponent from '../components/Login';
import Footer from '../components/Footer';
import '../scss/login.scss';

const Login = () => {
    return (
        <>
            <Header />
            <Container fluid className='container-login'>
                <LoginComponent />    
            </Container>
            <Footer />
        </>
    )
}

export default Login;
