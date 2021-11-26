import { Container, Row, Col } from 'react-bootstrap';
import Card from './Card';
import Button from './Button';
import { useDelete } from '../hooks/useAction';

const Team = ({heroes, setTeam, detail}) => {
    const [deleteHero] = useDelete(heroes, setTeam);

    return (
        <Container fluid>
            <p>This is</p>
            <h1>Your team</h1>
            <Row>
                { heroes.map(hero => {
                    return (
                        <Col lg={4} key={hero.id}>
                            <Card key={hero.id} {...hero}>
                                <Button 
                                    action={() => detail(hero)} title='Detail' 
                                    variant="primary" type="submit" /> 
                                <Button 
                                    action={() => deleteHero(hero)} title='Delete' 
                                    variant="success" type="submit" /> 
                            </Card>
                        </Col>
                    )}
                )}
            </Row>
        </Container>
    ) 
}

export default Team;
