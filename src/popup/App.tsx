import { AppBar } from '@material-ui/core';
import React, { useState, ReactElement } from 'react';
import { browser } from 'webextension-polyfill-ts';
import CustomTabs from '@/popup/components/CustomTabs';
import { KeybindGroup } from '@/popup/components/KeybindGroup';
import { TabPanel } from '@/popup/components/TabPanel';
import { keybinds } from '@/popup/components/keybinds';
import BackgroundSettings from '@/popup/pages/BackgroundSettings';
import ChannelList from '@/popup/pages/ChannelList';
import { useStyles } from '@/popup/styles/App';

/*
 * storage keys
 * 0-9: channel url
 * 10: background url
 * 11: filter rgba string rgba(36, 43, 51, 0.8) rgba(255, 255, 255, 0.8)
 */

let initialUrls: Record<string, string>;
browser.storage.sync
  .get(new Array(12).fill(null).map((_, i) => String(i)))
  .then((newValue) => {
    initialUrls = newValue;
  });

export const App = (): ReactElement => {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);

  const [urls, setUrls] = useState(
    new Array(12).fill(null).map((_, i) => initialUrls[String(i)] as string)
  );

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
        <ChannelList classes={classes} urls={urls} setUrls={setUrls} />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <div className={classes.shortcut}>
          {keybinds.map((prop) => (
            <KeybindGroup {...prop} classes={classes} />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <BackgroundSettings classes={classes} urls={urls} setUrls={setUrls} />
      </TabPanel>
    </div>
  );
};
