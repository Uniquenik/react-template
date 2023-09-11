import { Button, Center, Stack, Text, Image, Box, Group } from '@mantine/core';
import { useEffect, useState } from 'react';

import DefaultLayout from 'components/layouts/defaultLayout/DefaultLayout';
import { useExampleStore } from 'modules/example/ExampleStore';

interface IMainScreenProps {}

const MainScreen: React.FC<IMainScreenProps> = () => {
  const [getBeerItem, getRandomBeer, beerItem, loading] = useExampleStore(state => [
    state.getBeerItem,
    state.getRandomBeer,
    state.beerItem,
    state.loading,
  ]);

  const [isTestError, setIsTestError] = useState(false);

  //Effects
  useEffect(() => {
    if (isTestError) {
      throw new Error('Test error');
    }
  }, [isTestError]);

  //Handlers
  const handleGetRandomBeer = () => {
    getRandomBeer();
  };

  const handleGetErrorBeer = () => {
    getBeerItem('afsiohufshaufh');
  };

  const handleGetError = () => {
    setIsTestError(prev => !prev);
  };

  //Renders
  const renderBeerItem = () => {
    return (
      <Group position="center" spacing={30}>
        <Stack maw={300} align="center">
          <Text size={'xl'}>{beerItem?.name}</Text>
          <Text size={'sm'}>{beerItem?.description}</Text>
        </Stack>
        <Box maw={150}>
          <Image radius={'md'} src={beerItem?.image_url} alt="With default placeholder" withPlaceholder />
        </Box>
      </Group>
    );
  };

  return (
    <DefaultLayout>
      <Center>
        <Stack>
          <Text fz="xl" align="center">
            Main test page
          </Text>
          <Button variant="filled" onClick={handleGetRandomBeer} loading={loading}>
            Get random beer
          </Button>
          <Button variant="outline" color="red" onClick={handleGetErrorBeer} loading={loading}>
            Throw server response error
          </Button>
          <Button variant="filled" color="red" onClick={handleGetError}>
            Throw client error
          </Button>
        </Stack>
      </Center>
      <Center mt={20}>{beerItem && renderBeerItem()}</Center>
    </DefaultLayout>
  );
};

export default MainScreen;
