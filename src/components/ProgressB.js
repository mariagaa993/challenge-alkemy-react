import { ProgressBar } from 'react-bootstrap';

const ProgressB = ({title, value}) => {
    return <ProgressBar now={value} label={`${title} - ${value}%`} />
}

export default ProgressB;
