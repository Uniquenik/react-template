import { Container } from '@mantine/core';

import DefaultLayout from 'components/layouts/defaultLayout/DefaultLayout';

import { LoginComponent } from './components/LoginComponent';

interface IAuthScreenProps {}

const AuthScreen: React.FC<IAuthScreenProps> = () => {
  //Render
  return (
    <DefaultLayout>
      <Container size={'md'}>
        <LoginComponent />
      </Container>
    </DefaultLayout>
  );
};

export default AuthScreen;
