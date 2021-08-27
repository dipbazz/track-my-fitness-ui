import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../components/Home';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import MeasurementContainer from '../containers/MeasurementContainer';
import MeasurementListContainer from '../containers/MeasurementListContainer';
import MeasurementDetailContainer from '../containers/MeasurementDetailContainer';
import ProgressContainer from '../containers/ProgressContainer';
import MoreContainer from '../containers/MoreContainer';

/* eslint-disable react/jsx-props-no-spreading */
const withAuthentication = (WrappedComponent) => {
  const ProtectedRoute = (props) => {
    const isAuthenticated = useSelector((state) => state.currentUser.isAuthenticated);
    if (!isAuthenticated) {
      return <Redirect to={{ pathname: '/login' }} />;
    }
    return <WrappedComponent {...props} />;
  };
  ProtectedRoute.displayName = 'ProtectedRoute';
  return ProtectedRoute;
};

const Routes = () => (
  <Switch>
    <Route path="/" exact component={withAuthentication(Home)} />
    <Route path="/measurement" exact component={withAuthentication(MeasurementContainer)} />
    <Route path="/measurement/list" exact component={withAuthentication(MeasurementListContainer)} />
    <Route path="/measurement/detail/:date" exact component={withAuthentication(MeasurementDetailContainer)} />
    <Route path="/progress" exact component={withAuthentication(ProgressContainer)} />
    <Route path="/more" exact component={withAuthentication(MoreContainer)} />
    <Route path="/login" component={LoginContainer} exact />
    <Route path="/register" component={RegisterContainer} exact />
  </Switch>
);

export default Routes;
