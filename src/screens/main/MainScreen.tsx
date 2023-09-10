import DefaultLayout from 'components/layouts/defaultLayout/DefaultLayout';
import React from 'react';

interface IMainScreenProps {}

const MainScreen: React.FC<IMainScreenProps> = () => {
  //Render
  return (
    <DefaultLayout> 
      <div>
        Main Screen
      </div>
    </DefaultLayout>
  );
};

export default MainScreen;
