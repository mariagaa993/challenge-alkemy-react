import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Button from '../components/Button';
import Team from '../components/Team';
import Search from '../components/Search';
import Powerstats from '../components/Powerstats';
import ModalHeroes from '../components/Modal';
import Footer from '../components/Footer';
import { useGetResults } from '../hooks/useSearch';
import { useAdd, useDetail } from '../hooks/useAction';
import { useReduce } from '../hooks/useReduce';
import { useRemoveAuthenticated } from '../hooks/useAut';
import {useState} from 'react';
import Loader from '../components/Loader';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [results, handleSearch] = useGetResults(setLoading);
    const [addHero, team, setTeam] = useAdd();
    const [detail] = useDetail();
    const [totalAverage, otherDetails] = useReduce(team);
    const [removeToken] = useRemoveAuthenticated();

    return (
        <Container fluid>
            <Header><Button title='Logout' action={removeToken} /> </Header> 
            <Search handleSearch={handleSearch} />
            {loading && <Loader /> }
            <ModalHeroes heroes={results} addHero={addHero} detail={detail} />               
            <Row>
                <Col lg={7}>
                    <Team heroes={team} setTeam={setTeam} detail={detail} />
                </Col>
                <Col lg={5}>
                    <Powerstats heroes={team} average={totalAverage} otherDetails={otherDetails} />
                </Col>
            </Row>
            <Footer /> 
        </Container>
    )
}

export default Home;
