import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import store from './state/store';
import { NotFound } from './routes/404/NotFound';
import LoginContainer from './routes/login/LoginContainer';
import MainLayout from './routes/app/MainLayout';
import Home from './routes/home/Home';
import './index.css';

const history = createBrowserHistory();

const loggedIn = () => {
  const contextState = store.getState().context;
  if (contextState.isAuthenticated) {
    return true;
  }
  return false;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return(
    <Route 
      {...rest}
      render={props => (
        loggedIn() ? (
        <Component {...props}/>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
        }}
        />
      )
    )}
    />
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
          <Route exact={true} path="/" component={Home} />
          <PrivateRoute path="/app" component={MainLayout} />
          <Route exact={true} path="/login" component={LoginContainer} />
          <Route exact={true} path="/404" component={NotFound} />
          <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
