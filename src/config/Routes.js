import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import ProtectedRoute from '../utils/ProtectedRoute';

const Routes = () => (
  <Switch>
    <ProtectedRoute path="/" exact>
      <Home />
    </ProtectedRoute>
    <Route path="/login" component={Login} exact />
    <Route path="/register" component={Register} exact />
  </Switch>
);

export default Routes;
