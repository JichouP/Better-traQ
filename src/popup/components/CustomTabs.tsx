import { Tabs, Tab } from '@material-ui/core';
import React, { ReactElement } from 'react';

type Props = {
  classes: Classes;
  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
};

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

export default function CustomTabs(props: Props): ReactElement {
  const { tabIndex, setTabIndex, classes } = props;
  const handleTabChange = (
    _event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number
  ) => {
    setTabIndex(newValue);
  };
  return (
    <Tabs
      value={tabIndex}
      onChange={handleTabChange}
      aria-label="tabs"
      variant="fullWidth"
      TabIndicatorProps={{ style: { background: '#005bac' } }}
    >
      <Tab label="チャンネルリスト" {...a11yProps(0)} className={classes.tab} />
      <Tab
        label="ショートカットキー"
        {...a11yProps(1)}
        className={classes.tab}
      />
      <Tab label="背景・その他" {...a11yProps(1)} className={classes.tab} />
    </Tabs>
  );
}
