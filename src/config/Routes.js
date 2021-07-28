import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import ProtectedRoute from '../utils/ProtectedRoute';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';

const Routes = () => (
  <Switch>
    <ProtectedRoute path="/" exact>
      <Home />
    </ProtectedRoute>
    <Route path="/login" component={LoginContainer} exact />
    <Route path="/register" component={RegisterContainer} exact />
  </Switch>
);

export default Routes;
