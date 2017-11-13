import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps {
}

export default class Home extends React.Component<HomeProps, {}> {
  render() {
    return (
      <div>
        <h1>Home Public Page</h1>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/app">App - Protected Home Page</Link></li>
          <li><Link to="/app/pageA">App - Protected Deep Link to Page A</Link></li>
          <li><Link to="/app/pageB">App - Protected Deep Link to Page B</Link></li>
        </ul>
      </div>
    );
  }
}
