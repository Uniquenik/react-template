import DefaultLayout from 'components/layouts/defaultLayout/DefaultLayout';

interface IMainScreenProps {}

const MainScreen: React.FC<IMainScreenProps> = () => {
  //Render
  return (
    <DefaultLayout>
      <div>Main Screen</div>
    </DefaultLayout>
  );
};

export default MainScreen;
