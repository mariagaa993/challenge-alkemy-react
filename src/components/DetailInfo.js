import { Container, Row, Col } from 'react-bootstrap';
import ProgressB from './ProgressB';
import Button from './Button';
import { useBack } from '../hooks/useAction';

const DetailInfo = ({addHero}) => {
    const selectedHero = JSON.parse(localStorage.getItem('hero'));
    const [back] = useBack();
    
    return (
        <Container fluid>     
            <Row>
                <Col> 
                    <img className='card-img' 
                        src={`https://image.tmdb.org/t/p/w342/${selectedHero.poster_path}`} 
                        alt='img' />
                </Col>
                <Col>
                    <h1>{selectedHero.name}</h1>
                    <ProgressB />
                    <Container fluid>
                        <Button action={() => addHero(selectedHero)} title='Add' 
                            variant="success" type="submit" /> 
                        <Button action={() => back()} title='Back' 
                            variant="primary" type="submit" />   
                    </Container>
                </Col>
            </Row>        
        </Container>
    )
}

export default DetailInfo;
