import * as React from 'react';
import { BasicButton } from '../../components/ButtonExample';

export interface LoginPresenterProps {
  onAuthenticateClick(): void;
}

export function LoginPresenter (props: LoginPresenterProps) {
    return (
      <div>
        <h2> Login Page </h2>
        <BasicButton onClick={props.onAuthenticateClick} title="Authenticate"/>
      </div>
    );
}