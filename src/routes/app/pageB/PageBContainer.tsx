import * as React from 'react';
import { connect } from 'react-redux';
import { PageBPresenter } from './PageBPresenter';

export interface PageBContainerProps {
}

class PageBContainer extends React.Component<PageBContainerProps, {}> {
  render() {
    return (
      <PageBPresenter />        
    );
  }
}

const mapState2Props = state => {
  return {
  };
};

export default connect(mapState2Props)(PageBContainer);
