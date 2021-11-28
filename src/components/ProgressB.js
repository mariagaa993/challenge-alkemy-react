import { ProgressBar } from 'react-bootstrap';
import '../scss/components/progressbar.scss';

const ProgressB = ({title, value}) => {
    return <ProgressBar now={value} label={`${title} - ${value}%`} />
}

export default ProgressB;
