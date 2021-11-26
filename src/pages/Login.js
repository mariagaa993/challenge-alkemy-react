import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import LoginComponent from '../components/Login';
import Footer from '../components/Footer';

const Login = () => {
    return (
        <Container fluid>
            <Header />
            <LoginComponent />
            <Footer />
        </Container>
    )
}

export default Login;
