import React from 'react';
import { LoginComponent } from './components/LoginComponent';
import DefaultLayout from '../../components/layouts/DefaultLayout';

interface IAuthScreenProps {}

export const AuthScreen: React.FC<IAuthScreenProps> = () => {
  //Render
  return (
    <DefaultLayout>
      <LoginComponent />
    </DefaultLayout>
  );
};
