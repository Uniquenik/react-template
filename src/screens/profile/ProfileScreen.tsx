import { Button } from '@mantine/core';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from 'base/firebase/firebase-config';
import DefaultLayout from 'components/layouts/defaultLayout/DefaultLayout';
import { useUserStore } from 'modules/user/UserStore';
import { Routes } from 'routes/routes';

interface IProfileScreenProps {}

const ProfileScreen: React.FC<IProfileScreenProps> = () => {
  const resetUserStore = useUserStore(state => state.resetStore);

  const navigate = useNavigate();

  //Handlers
  const handleLogout = () => {
    signOut(auth);
    resetUserStore();
    navigate(Routes.auth);
  };

  //Render
  return (
    <DefaultLayout>
      <Button onClick={handleLogout}>Logout</Button>
    </DefaultLayout>
  );
};

export default ProfileScreen;
