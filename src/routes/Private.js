import { Redirect, Route } from 'react-router-dom';
import { useAuthenticated } from '../hooks/useAut';

const PrivateRoute = ({children, ...rest}) => {
    const auth = useAuthenticated();

    return (
        <Route {...rest} render={({ location }) => auth ? (children) : 
            <>
            {alert('Without permission! You must enter first.')}
            <Redirect to={{pathname: "/login", state: {from: location}}} /></>
             }
        />
    )
}

export default PrivateRoute;
