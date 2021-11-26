import { ProgressBar } from 'react-bootstrap';

const ProgressB = ({title, value}) => {
    return <ProgressBar variant='success' now={value} label={`${title} - ${value}%`} />
}

export default ProgressB;
