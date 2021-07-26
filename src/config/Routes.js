import { Route, Switch } from 'react-router-dom';
import Register from '../components/Register';
import Home from '../components/Home';
import ProtectedRoute from '../utils/ProtectedRoute';
import LoginContainer from '../containers/LoginContainer';

const Routes = () => (
  <Switch>
    <ProtectedRoute path="/" exact>
      <Home />
    </ProtectedRoute>
    <Route path="/login" component={LoginContainer} exact />
    <Route path="/register" component={Register} exact />
  </Switch>
);

export default Routes;
