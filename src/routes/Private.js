import { Redirect, Route } from 'react-router-dom';
import { useAuthenticated } from '../hooks/useAut';

export default function PrivateRoute({ children, ...rest }) {
    
    let auth = useAuthenticated();
  
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }