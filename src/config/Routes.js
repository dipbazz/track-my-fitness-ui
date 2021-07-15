import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/login" component={Login} exact />
    <Route path="/register" component={Register} exact />
  </Switch>
);

export default Routes;
