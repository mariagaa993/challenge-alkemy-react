import { ListGroup } from 'react-bootstrap';

const List = ({title, value}) => {
    return (
        <ListGroup className='list'>
            <ListGroup.Item>{title} = {value} </ListGroup.Item>
        </ListGroup>
    )
}

export default List;
