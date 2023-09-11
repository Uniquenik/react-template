import { Button, Center, Stack, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Home, Refresh } from 'tabler-icons-react';

import { Routes } from 'routes/routes';

interface IClientErrorScreenProps {
  error: any | null;
  onHandleReload: () => void | null;
}

const ClientErrorScreen: React.FC<IClientErrorScreenProps> = props => {
  const navigate = useNavigate();

  //Handlers
  const handleRefreshPage = () => {
    props.onHandleReload();
    navigate(0);
  };

  const handleMainPage = () => {
    props.onHandleReload();
    navigate(Routes.main);
  };

  //Render
  return (
    <Center h={'100vh'}>
      <Stack>
        <Text fz="xl" align="center">
          Client Error
        </Text>
        <Button variant="filled" leftIcon={<Refresh />} onClick={handleRefreshPage}>
          Refresh page
        </Button>
        <Button variant="outline" leftIcon={<Home />} onClick={handleMainPage}>
          Go to main page
        </Button>
      </Stack>
    </Center>
  );
};

export default ClientErrorScreen;
