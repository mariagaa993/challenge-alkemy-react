import { ListGroup } from 'react-bootstrap';

const List = ({title, value}) => {
    return (
        <ListGroup>
            <ListGroup.Item>{title} = {value}</ListGroup.Item>
        </ListGroup>
    )
}

export default List;
