import { Container, Row, Col } from 'react-bootstrap';
import List from './List';
import Button from './Button';
import { useBack } from '../hooks/useAction';

const DetailInfo = ({addHero}) => {
    const selectedHero = JSON.parse(localStorage.getItem('hero'));
    const [back] = useBack();

    return (
        <Container fluid>     
            <Row>
                <Col xs={12} md={6} lg={5}> 
                    <img className='detail-img' 
                        src={selectedHero.image.url} 
                        alt={selectedHero.name} />
                </Col>
                <Col xs={12} md={6} lg={7}>
                    <h1 className='title-detail'>{selectedHero.name}</h1>
                    {Object.entries(selectedHero.appearance).map(result => 
                        <List key={result[0]} title={result[0]} 
                            value={result[1] === '-' ? 'null' : result[1]} />)}
                    <Container fluid className='button-detail'>
                        <Button className='b-detail' action={() => addHero(selectedHero)} title='Add' 
                            variant='success' type='submit' /> 
                        <Button className='b-detail' action={() => back()} title='Back' 
                            variant='dark' type='submit' />   
                    </Container>
                </Col>
            </Row>        
        </Container>
    )
}

export default DetailInfo;
