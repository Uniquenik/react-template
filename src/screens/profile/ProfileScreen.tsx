import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../base/firebase/firebase-config';
import { useRootStore } from '../../base/RootStore';
import { Routes } from '../../routes/routes';
import { Button } from '@mantine/core';
import DefaultLayout from '../../components/layouts/DefaultLayout';

export const ProfileScreen = () => {
  const { userStore } = useRootStore();

  const navigate = useNavigate();

  //Effects
  useEffect(() => {}, []);

  //Hanlders
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
};
