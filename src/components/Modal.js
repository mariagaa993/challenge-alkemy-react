import { Modal, Container, Row, Col } from 'react-bootstrap';
import FigureComponent from './Figure';
import Button from './Button';
import { useModal } from '../hooks/useModal';
import '../scss/components/modal.scss';

const ModalHeroes = ({heroes, addHero, detail}) => {
    const [ show, setShow ] = useModal(heroes);

    return (
        <Modal
            size="xl"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">Who do you want for your team?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container fluid className='container-modal'>
                    <Row>
                        { heroes.map(hero => {
                            return (
                                <Col md={6} lg={heroes.length <= 1 ? 12 : 4 } xl={heroes.length <= 1 ? 12 : 4 } key={hero.id}>
                                    <FigureComponent className='card-modal' key={hero.id} {...hero}>
                                        <Button 
                                            action={() => detail(hero)} title='Detail' 
                                            className='detail-button' type="submit" />
                                        <Button 
                                            action={() => addHero(hero)} title='Add' 
                                            variant="success" type="submit" /> 
                                    </FigureComponent>
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
