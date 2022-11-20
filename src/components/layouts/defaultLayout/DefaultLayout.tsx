import { ActionIcon, Container, createStyles, Group, Header as MantineHeader, Button } from '@mantine/core';
import { BrandReact, Plus } from 'tabler-icons-react';
import { ColorSchemeButton } from '../../ColorSchemeButton';
import { useRootStore } from '../../../base/RootStore';
import { Link, useNavigate } from 'react-router-dom';
import { NavLinks, Routes } from '../../../routes/routes';
import { observer } from 'mobx-react-lite';
import { DesktopNavItem } from './components/DesktopNavItem';
import { useAllMQ } from '../../../base/hooks/useAllMQ';
import { MobileNavItem } from './components/MobileNavItem';

const DefaultLayout = observer((props: { children: JSX.Element }) => {
  const { userStore } = useRootStore();
  const { classes } = useStyles();

  const navigate = useNavigate();

  const { isMD } = useAllMQ();

  //Handlers
  const handleUserButton = () => {
    if (userStore.userInfo) {
      navigate(Routes.profile);
    } else {
      navigate(Routes.auth);
    }
  };

  //Renders
  const renderDesktopMenu = () => {
    return (
      <MantineHeader height={55} fixed={true}>
        <Container size={'xl'} className={classes.inner}>
          <Group align={'stretch'}>
            <ActionIcon size={'xl'}>
              <BrandReact size={40} />
            </ActionIcon>
            {renderDesktopNavList()}
          </Group>
          <Group position={'right'}>
            <Button variant={'subtle'} onClick={handleUserButton}>
              {userStore.userInfo ? userStore.userInfo.lastname : 'Вход'}
            </Button>
            <ColorSchemeButton />
          </Group>
        </Container>
      </MantineHeader>
    );
  };

  const renderDesktopNavList = () => {
    return (
      <Group align={'center'} pt={2} pl={8}>
        {NavLinks.map(link => {
          return <DesktopNavItem link={link} />;
        })}
      </Group>
    );
  };

  const renderMobileMenu = () => {
    return (
      <MantineHeader height={60} fixed={true} position={{ bottom: -1, left: 0, right: 0 }}>
        <Group grow>
          {NavLinks.map(link => {
            return <MobileNavItem link={link} />;
          })}
          <Link
            style={{ position: 'absolute', height: '75px', width: '75px', bottom: '3px', right: '7vw' }}
            to={Routes.main}
          >
            <ActionIcon radius="xl" style={{ height: '70px', width: '70px' }} variant="filled">
              <Plus size={30} />
            </ActionIcon>
          </Link>
        </Group>
      </MantineHeader>
    );
  };

  return (
    <>
      {isMD ? renderDesktopMenu() : renderMobileMenu()}
      <Container size={'xl'} pt={70}>
        {props.children}
      </Container>
    </>
  );
});
export default DefaultLayout;

const useStyles = createStyles(theme => ({
  inner: {
    height: 55,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkLabel: {
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
  },
}));