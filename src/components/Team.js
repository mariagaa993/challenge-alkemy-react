import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card';
import Button from './Button';
import { useDelete } from '../hooks/useAction';

const Team = ({heroes, setTeam, detail}) => {
    const [deleteHero] = useDelete(heroes, setTeam);
    
    return (
        <Container fluid className='team'> 
            { heroes.length === 0 ? 
                <p className='home-title-not-selected'>You haven't selected a character for your team yet</p>
            :
                <>
                    <p className='home-title'>This is</p>
                    <h1 className='home-subtitle'>Your team</h1>
                    <Row>
                        { heroes.map(hero => {
                            return (
                                <Col md={4} lg={6} xl={4} key={hero.id}>
                                    <Card key={hero.id} {...hero}>
                                        <Button 
                                            action={() => detail(hero)} title='Detail' 
                                            className='detail-button' type='submit' /> 
                                        <Button 
                                            action={() => deleteHero(hero)} title='Delete' 
                                            variant='danger' type='submit' /> 
                                    </Card>
                                </Col>
                            )}
                        )}
                    </Row>
                </>
            }     
        </Container>
    ) 
}

export default Team;
