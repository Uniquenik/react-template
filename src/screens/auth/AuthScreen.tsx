import React from 'react';
import { LoginComponent } from './components/LoginComponent';

interface IAuthScreenProps {}

export const AuthScreen: React.FC<IAuthScreenProps> = () => {
  //Render
  return (
    <div>
      <LoginComponent />
    </div>
  );
};
