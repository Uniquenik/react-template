import { Header as MantineHeader } from '@mantine/core';

const Navigation = (props: { children: JSX.Element }) => {
  return (
    <>
      <MantineHeader height={55} fixed={true}>
        <div></div>
      </MantineHeader>
      {props.children}
    </>
  );
};
export default Navigation;
