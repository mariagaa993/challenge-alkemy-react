import { Switch, Route } from 'react-router-dom';
import Initial from '../pages/Initial';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import PrivateRoute from './Private';

const Routes = () => {

  	return (
		<Switch>
			<Route exact path='/' component={Initial} />
    		<Route exact path='/login' component={Login} />
			<PrivateRoute exact path='/home'>
				<Home />
			</PrivateRoute>
			<Route exact path='/:id/info' component={Detail} />
		</Switch>
  	)
}

export default Routes;
