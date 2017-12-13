import * as React from 'react';
import { connect } from 'react-redux';
import { Location, History } from 'history';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';
import actions from './../../state/actions';
import selectors from './../../state/selectors';
import { LoginPresenter } from './LoginPresenter';

export interface LoginContainerProps {
  isAuthenticated: boolean;
  history: History;
  location: Location;
  requestLogin(obj: {}): void;
}

class LoginContainer extends React.Component<LoginContainerProps, {}> {
  constructor(props: LoginContainerProps) {
    super(props);
    this.onAuthenticateClick = this.onAuthenticateClick.bind(this);
  }

  onAuthenticateClick() {
    this.props.requestLogin({ username: 'demo-username', password: 'demo-password'});
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/app' } };
    if (this.props.isAuthenticated === true) {
      return (
        <Redirect to={from}/>
      );
    }
    return (
      <LoginPresenter onAuthenticateClick={this.onAuthenticateClick}/>        
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: selectors.context.isAuthenticated(state),
});

function mapDispatchToProps(dispatch: Function) {
  return {
    requestLogin: ({}) => {
        dispatch(actions.context.loginRequest({}));
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));
