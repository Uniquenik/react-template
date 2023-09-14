import { Button, LoadingOverlay, Space, TextInput, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'tabler-icons-react';

import { useAuthStore } from 'modules/auth/AuthStore';

interface ILoginComponentProps {
  error: any;
  loading: boolean;
  login: (email: string, password: string) => void;
}

export const LoginComponent: React.FC<ILoginComponentProps> = props => {
  const { email, password, setEmail, setPassword } = useAuthStore();

  const navigate = useNavigate();

  //Handlers
  const handleLogin = () => {
    props.login(email, password);
  };

  //Render
  return (
    <form onSubmit={handleLogin}>
      {props.loading && <LoadingOverlay visible={true} />}
      <TextInput
        variant={'filled'}
        size={'lg'}
        icon={<Mail />}
        type={'email'}
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
      <Button size={'lg'} fullWidth type="submit">
        Вход
      </Button>
      <Text data-testid="error" color="red" size={'md'} align="center">
        {props?.error?.message}
      </Text>
    </form>
  );
};
