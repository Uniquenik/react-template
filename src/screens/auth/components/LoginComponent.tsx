import { Button, LoadingOverlay, Space, TextInput } from '@mantine/core';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'tabler-icons-react';

import { auth } from 'base/firebase/firebase-config';

export const LoginComponent = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const login = () => {
    signInWithEmailAndPassword(email, password).then(resp => {});
  };

  return (
    <>
      {loading && <LoadingOverlay visible={true} />}
      <TextInput
        variant={'filled'}
        size={'lg'}
        icon={<Mail />}
        placeholder="Электронная почта"
        onChange={(event: any) => {
          setEmail(event.target.value);
        }}
      />
      <Space h={'sm'} />
      <TextInput
        variant={'filled'}
        size={'lg'}
        icon={<Lock />}
        placeholder="Пароль"
        onChange={(event: any) => {
          setPassword(event.target.value);
        }}
      />
      <Space h={'xl'} />
      <Button size={'lg'} fullWidth onClick={login}>
        Вход
      </Button>
      {error?.message}
    </>
  );
};
