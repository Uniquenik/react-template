import { Button } from '@mantine/core';
import { signOut } from 'firebase/auth';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRootStore } from 'base/RootStore';
import { auth } from 'base/firebase/firebase-config';
import DefaultLayout from 'components/layouts/defaultLayout/DefaultLayout';
import { Routes } from 'routes/routes';

const ProfileScreen = observer(() => {
  const { exampleStore, userStore } = useRootStore();

  const navigate = useNavigate();

  //Effects
  useEffect(() => {
    exampleStore.getBeerItem('1');
  }, []);

  //Handlers
  const handleLogout = () => {
    signOut(auth);
    userStore.resetStore();
    navigate(Routes.auth);
  };

  //Renders
  return (
    <DefaultLayout>
      <Button onClick={handleLogout}>Logout</Button>
    </DefaultLayout>
  );
});

export default ProfileScreen;
