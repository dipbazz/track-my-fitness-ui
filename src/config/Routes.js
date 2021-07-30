import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import ProtectedRoute from '../utils/ProtectedRoute';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import MeasurementContainer from '../containers/MeasurementContainer';
import MeasurementListContainer from '../containers/MeasurementListContainer';

const Routes = () => (
  <Switch>
    <ProtectedRoute path="/" exact>
      <Home />
    </ProtectedRoute>
    <ProtectedRoute path="/measurement" exact>
      <MeasurementContainer />
    </ProtectedRoute>
    <ProtectedRoute path="/measurement/list" exact>
      <MeasurementListContainer />
    </ProtectedRoute>
    <Route path="/login" component={LoginContainer} exact />
    <Route path="/register" component={RegisterContainer} exact />
  </Switch>
);

export default Routes;
