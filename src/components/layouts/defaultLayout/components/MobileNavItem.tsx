import { ActionIcon, Stack, Text, createStyles } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

import { NavLinkModel } from 'routes/routes';

interface INavLinkProps {
  link: NavLinkModel;
}

export const MobileNavItem: React.FC<INavLinkProps> = props => {
  const { link } = props;

  const { classes } = useStyles();

  //Render
  return (
    <ActionIcon size={55}>
      <Link to={link.path}>
        <Stack className={classes.link} align={'center'} spacing={4}>
          {link.icon}
          <Text fz={'sm'} className={classes.linkLabel}>
            {link.title}
          </Text>
        </Stack>
      </Link>
    </ActionIcon>
  );
};

const useStyles = createStyles(theme => ({
  linkLabel: {
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9],
  },
  link: {
    color: 'inherit',
  },
}));
