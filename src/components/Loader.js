import ReactLoading from 'react-loading';
import '../scss/components/loader.scss';

const Loader = () => {
    return <ReactLoading className='loader' type='spinningBubbles' color='white' 
        height={60} width={60} />
}

export default Loader;
