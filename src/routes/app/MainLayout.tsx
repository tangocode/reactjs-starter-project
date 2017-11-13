import * as React from 'react';
import { Route, match, Link } from 'react-router-dom';

import PageAContainer from '../app/pageA/PageAContainer';
import PageBContainer from '../app/pageB/PageBContainer';
import HomeContainer from './home/HomeContainer';
import { BasicButton } from '../../components/ButtonExample/index';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { logoutRequest } from '../login/actions';

export interface MainLayoutProps {
  match: match<{}>;
  history: {
    push(path: string): void
  };
  requestLogout(): void;
}

class MainLayout extends React.Component<MainLayoutProps, {}> {
  render() {
    return (
      <div>
        <h1>Welcome...</h1>
        <BasicButton
          onClick={() => {
            this.props.requestLogout();
            this.props.history.push('/');
          }}
          title="Log out"
        />
        <h2> MainLayout Internal Links</h2>
        <ul>
          <li><Link to={`${this.props.match.path}/pageA`}>PageA</Link></li>
          <li><Link to={`${this.props.match.path}/pageB`}>PageB</Link></li>
        </ul>
        <div>Children components go below here....</div>
        <Route path={`${this.props.match.path}/pageA`} component={PageAContainer} />
        <Route path={`${this.props.match.path}/pageB`} component={PageBContainer} />
        <Route exact={true} path={this.props.match.path} component={HomeContainer} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch: Function) {
    return {
        requestLogout: ({}) => {
            dispatch(logoutRequest());
        },
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLayout));