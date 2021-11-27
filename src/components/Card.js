import { Container, Card } from 'react-bootstrap';
import './card.css';
import ProgressB from './ProgressB';

const CardHero = ({name, image, children, powerstats}) => {
    return (
        <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Img src={image.url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Container fluid className='progressBar'>
                    { Object.entries(powerstats).map(result => <ProgressB key={result[0]} title={result[0]} value={result[1] === 'null' ? 0 : result[1]} />)}
                </Container>
                <Container fluid className="card-button">
                    {children}        
                </Container>
            </Card.Body>
        </Card>
    )
}

export default CardHero;
