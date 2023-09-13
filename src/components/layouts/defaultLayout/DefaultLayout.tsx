import { ActionIcon, Button, Container, createStyles, Group, Header as MantineHeader, MediaQuery } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrandReactNative, Plus } from 'tabler-icons-react';

import { useUserStore } from 'modules/user/UserStore';
import { NavLinks, Routes } from 'routes/routes';

import { ColorSchemeButton } from '../../ColorSchemeButton';
import { DesktopNavItem } from './components/DesktopNavItem';
import { MobileNavItem } from './components/MobileNavItem';

interface IDefaultLayoutProps {}

const DefaultLayout: React.FC<PropsWithChildren<IDefaultLayoutProps>> = props => {
  const userStore = useUserStore();

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

  //Renders
  const renderDesktopMenu = () => {
    return (
      <MantineHeader height={55} fixed={true}>
        <Container size={'xl'} className={classes.inner}>
          <Group align={'stretch'}>
            <Link to={Routes.main}>
              <ActionIcon size={'xl'}>
                <BrandReactNative size={40} />
              </ActionIcon>
            </Link>
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
          return <DesktopNavItem key={link.title} link={link} />;
        })}
      </Group>
    );
  };

  const renderMobileMenu = () => {
    return (
      <MantineHeader height={60} fixed={true} position={{ bottom: -1, left: 0, right: 0 }}>
        <Group grow>
          {NavLinks.map(link => {
            return <MobileNavItem key={link.path} link={link} />;
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
      <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
        {renderMobileMenu()}
      </MediaQuery>
      <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
        {renderDesktopMenu()}
      </MediaQuery>
      <Container size={'xl'} pt={70}>
        {props.children}
      </Container>
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
  linkLabel: {
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
  },
}));
