import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} exact />
    <Route path="/register" component={Register} exact />
  </Switch>
);

export default Routes;
