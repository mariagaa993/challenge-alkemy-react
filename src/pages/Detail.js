import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import DetailInfo from '../components/DetailInfo';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { useAdd } from '../hooks/useAction';
import { useRemoveAuthenticated } from '../hooks/useAut';
import '../scss/detail.scss';

const Detail = () => {
    const [addHero] = useAdd();
    const [removeToken] = useRemoveAuthenticated();
    
    return (
        <> 
            <Header> 
                <Button className='header-button' title='Logout' action={removeToken} /> 
            </Header> 
            <Container fluid className='container-detail'>       
                <DetailInfo addHero={addHero} />           
            </Container>
            <Footer /> 
        </> 
    )
}

export default Detail;
