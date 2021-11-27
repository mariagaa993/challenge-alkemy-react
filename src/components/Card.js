import { Container, Card } from 'react-bootstrap';
import ProgressB from './ProgressB';

const CardHero = ({name, image, children, biography, powerstats}) => {
    return (
        <Card>
            <Card.Title className='title'>{name}</Card.Title>
            <Card.Img src={image.url} />
            <Card.Body>
                <Card.Title className='hidden-title'>{name}</Card.Title>
                <p className='hidden-p'>Alignment: {biography.alignment}</p>
                <Container fluid className='progressBar'>
                    { Object.entries(powerstats).map(result => 
                        <ProgressB key={result[0]} title={result[0]} 
                            value={result[1] === 'null' ? '0' : result[1]} />)}
                </Container>
                <Container fluid className="card-button">
                    {children}        
                </Container>
            </Card.Body>
        </Card>
    )
}

export default CardHero;
