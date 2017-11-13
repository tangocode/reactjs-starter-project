import * as React from 'react';
import { Basic } from './styles';

interface BasicProps {
    className?: string;
    title: string;
    onClick?: () => void;
}

export default class BasicButton extends React.Component<BasicProps, {}> {
  render(): JSX.Element {
    return (
      <Basic onClick={this.props.onClick}>
        {this.props.title}
      </Basic>
    );
  }
}
