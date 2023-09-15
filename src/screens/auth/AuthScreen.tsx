import { Container } from '@mantine/core';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { auth } from 'base/firebase/FirebaseConfig';
import DefaultLayout from 'components/layouts/defaultLayout/DefaultLayout';

import { LoginComponent } from './components/LoginComponent';

interface IAuthScreenProps {}

const AuthScreen: React.FC<IAuthScreenProps> = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  //Handlers
  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(email, password).then(resp => {
      //console.log(resp);
    });
  };

  //Render
  return (
    <DefaultLayout>
      <Container size={'md'}>
        <LoginComponent error={error} loading={loading} login={handleLogin} />
      </Container>
    </DefaultLayout>
  );
};

export default AuthScreen;
