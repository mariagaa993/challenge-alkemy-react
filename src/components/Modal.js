import { Modal, Container, Row, Col } from 'react-bootstrap';
import Card from './Card';
import Button from './Button';
import { useModal } from '../hooks/useModal';

const ModalHeroes = ({heroes, addHero, detail}) => {
    const [ show, setShow ] = useModal(heroes);

    return (
        <Modal
            size="lg"
            show={show}
            fullscreen={true}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">Who do you want for your team?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container fluid>
                    <Row>
                        { heroes.map(hero => {
                            return (
                                <Col lg={4} key={hero.id}>
                                    <Card key={hero.id} {...hero}>
                                        <Button 
                                            action={() => detail(hero)} title='Detail' 
                                            variant="primary" type="submit" />
                                        <Button 
                                            action={() => addHero(hero)} title='Add' 
                                            variant="success" type="submit" /> 
                                    </Card>
                                </Col>
                            )}
                        )}
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default ModalHeroes;
