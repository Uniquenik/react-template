import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProfileScreen = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
  };

  useEffect(() => {}, []);

  return <></>;
};
