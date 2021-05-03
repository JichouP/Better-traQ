import { Box, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';

interface TabPanelProps {
  children: React.ReactNode;
  index: unknown;
  value: unknown;
}

export function TabPanel(props: TabPanelProps): ReactElement {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
