import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import DetailInfo from '../components/DetailInfo';
import Footer from '../components/Footer';
import { useAdd } from '../hooks/useAction';

const Detail = () => {
    const [addHero] = useAdd();
    
    return (
        <Container fluid>  
            <Header />      
            <DetailInfo addHero={addHero} />  
            <Footer />          
        </Container>
    )
}

export default Detail;
