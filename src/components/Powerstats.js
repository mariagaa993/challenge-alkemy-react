import { Container } from 'react-bootstrap';
import ProgressB from './ProgressB';
import List from './List';

const Powerstats = ({average, otherDetails}) => {
    return (
        <Container fluid className='powerstats'>
            <p className='home-title'>Your team</p>
            <h1 className='home-subtitle'>Power Stats</h1>
            { average.map(result => <ProgressB key={result[0]} title={result[0]} value={result[1]} />) }
            { otherDetails.map(result => 
                <List key={result[0]} title={result[0]} value={result[1]} />)}
        </Container>
    )
}

export default Powerstats;
