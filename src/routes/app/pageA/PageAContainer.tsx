import * as React from 'react';
import { connect } from 'react-redux';
import { PageAPresenter } from './PageAPresenter';

export interface PageAContainerProps {
}

class PageAContainer extends React.Component<PageAContainerProps, {}> {
  render() {
    return (
      <PageAPresenter />        
    );
  }
}

const mapState2Props = state => {
  return {
  };
};

export default connect(mapState2Props)(PageAContainer);
