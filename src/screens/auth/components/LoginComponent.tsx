import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, LoadingOverlay, Space, TextInput } from '@mantine/core';
import { Lock, Phone, UserCircle } from 'tabler-icons-react';
import { auth } from '../../../base/firebase/firebase-config';

export const LoginComponent = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const login = () => {
    signInWithEmailAndPassword(email, password).then(resp => {
      // console.log(user)
      // if (user) {
      //     dispatch(setUUID(user?.user.uid))
      // }
      navigate('/redirect');
    });

    //dispatch(loginUser(email, password))
  };

  const userLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(email, password).then(resp => {
      // console.log(user)
      // if (user) {
      //     dispatch(setUUID(user?.user.uid))
      // }
      navigate('/redirect');
    });
  };

  // useEffect(() => {
  //     if (user){
  //         dispatch(setUUID(user?.user.uid))
  //         navigate('/redirect')
  //     }
  // },[user])

  return (
    <Container>
      {loading && <LoadingOverlay visible={true} />}
      <TextInput
        style={{ backgroundColor: '#EEF6FF', borderRadius: 10, padding: 5 }}
        variant={'unstyled'}
        icon={<Phone />}
        placeholder="Номер телефона"
        onChange={(event: any) => {
          setEmail(event.target.value);
        }}
      />
      <Space h={'sm'} />
      <TextInput
        style={{ backgroundColor: '#EEF6FF', borderRadius: 10, padding: 5 }}
        variant={'unstyled'}
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
      <Button
        my={10}
        leftIcon={<UserCircle />}
        size={'lg'}
        fullWidth
        onClick={() => userLogin('user@mail.ru', '123456')}
      >
        Войти как пользователь
      </Button>
      <Button
        my={10}
        leftIcon={<UserCircle />}
        size={'lg'}
        fullWidth
        onClick={() => userLogin('seller@mail.ru', '123456')}
      >
        Войти как продавец
      </Button>
    </Container>
  );
};
