import { Container, Card } from 'react-bootstrap';
import './card.css';
import ProgressB from './ProgressB';

const CardHero = ({name, image, children}) => {
    return (
        <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Img src={image.url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Container fluid className='progressBar'>
                    <ProgressB />
                </Container>
                <Container fluid className="card-button">
                    {children}        
                </Container>
            </Card.Body>
        </Card>
    )
}

export default CardHero;
