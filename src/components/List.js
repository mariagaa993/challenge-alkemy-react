import { ListGroup } from 'react-bootstrap';
import '../scss/components/list.scss';

const List = ({title, value}) => {
    return (
        <ListGroup>
            <ListGroup.Item>{title} = {value}</ListGroup.Item>
        </ListGroup>
    )
}

export default List;
