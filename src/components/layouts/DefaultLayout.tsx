import { ActionIcon, Container, createStyles, Group, Header as MantineHeader, Button } from '@mantine/core';
import { BrandReact } from 'tabler-icons-react';
import { ColorSchemeButton } from '../ColorSchemeButton';
import { useRootStore } from '../../base/RootStore';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../routes/routes';

const DefaultLayout = (props: { children: JSX.Element }) => {
  const { userStore } = useRootStore();
  const { classes } = useStyles();

  const navigate = useNavigate();

  //Handlers
  const handleUserButton = () => {
    if (userStore.userInfo) {
      navigate(Routes.profile);
    } else {
      navigate(Routes.auth);
    }
  };

  //Render
  return (
    <>
      <MantineHeader height={55} fixed={true}>
        <Container className={classes.inner}>
          <Group align={'stretch'}>
            <ActionIcon size={'xl'}>
              <Group>
                <BrandReact size={40} />
              </Group>
            </ActionIcon>
          </Group>
          <Group position={'right'}>
            <Button variant={'subtle'} onClick={handleUserButton}>
              {userStore.userInfo ? userStore.userInfo.lastname : 'Вход'}
            </Button>
            <ColorSchemeButton />
          </Group>
        </Container>
      </MantineHeader>
      <Container pt={70}>{props.children}</Container>
    </>
  );
};
export default DefaultLayout;

const useStyles = createStyles(theme => ({
  inner: {
    height: 55,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
