import * as React from 'react';
import { HomePresenter } from './HomePresenter';

export interface HomeContainerProps {
}

export default class HomeContainer extends React.Component<HomeContainerProps, {}> {
  render() {
    return (
      <HomePresenter />
    );
  }
}
