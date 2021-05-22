import { AppBar } from '@material-ui/core';
import React, { useState, ReactElement, useEffect } from 'react';
import CustomTabs from '@/popup/components/CustomTabs';
import { KeybindGroup } from '@/popup/components/KeybindGroup';
import { TabPanel } from '@/popup/components/TabPanel';
import { keybinds } from '@/popup/components/keybinds';
import BackgroundSettings from '@/popup/pages/BackgroundSettings';
import ChannelList from '@/popup/pages/ChannelList';
import { useStyles } from '@/popup/styles/App';
import { CustomStorage, getAllData } from '@/utils/storage';
import { zCustomStorage } from '@/utils/zod';

export const App = (): ReactElement => {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);

  const [store, setStore] = useState<CustomStorage>(
    Object.fromEntries(Object.keys(zCustomStorage).map((key) => [key, '']))
  );

  useEffect(() => {
    getAllData().then(setStore);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <CustomTabs
          classes={classes}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
        />
      </AppBar>
      <TabPanel value={tabIndex} index={0}>
        <ChannelList classes={classes} store={store} setStore={setStore} />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <div className={classes.shortcut}>
          {keybinds.map((prop) => (
            <KeybindGroup
              key={prop.groupDescription}
              {...prop}
              classes={classes}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <BackgroundSettings
          classes={classes}
          store={store}
          setStore={setStore}
        />
      </TabPanel>
    </div>
  );
};
