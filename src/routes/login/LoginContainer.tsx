import * as React from 'react';
import { LoginPresenter } from './LoginPresenter';
import { loginRequest } from './actions';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../reducers/reducers';
import { Location, History } from 'history';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

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
    this.props.requestLogin({});
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
  isAuthenticated: isAuthenticated(state),
});

function mapDispatchToProps(dispatch: Function) {
    return {
        requestLogin: ({}) => {
            dispatch(loginRequest({}));
        },
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));
