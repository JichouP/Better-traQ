import {
  makeStyles,
  Theme,
  Box,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Container,
  TextField,
  Button,
} from '@material-ui/core';
import {
  Home,
  AmpStories,
  FlashOn,
  Send,
  DoubleArrow,
  LowPriority,
} from '@material-ui/icons';
import React, { useState, FormEvent, ReactElement } from 'react';
import { browser } from 'webextension-polyfill-ts';

/**
 * storage keys
 * 0-9: channel url
 * 10: background url
 * 11: filter rgba string rgba(36, 43, 51, 0.8) rgba(255, 255, 255, 0.8)
 */

interface TabPanelProps {
  children: React.ReactNode;
  index: unknown;
  value: unknown;
}

interface KeybindGroupProps {
  groupIcon: React.ReactNode;
  groupDescription: string;
  keybinds: { description: string; keybind: string }[];
}

const keyBinds: KeybindGroupProps[] = [
  {
    groupDescription: 'ホーム',
    groupIcon: <Home style={{ fontSize: '1.2rem', verticalAlign: -3 }} />,
    keybinds: [
      { description: 'ホーム', keybind: 'q' },
      { description: 'ホームチャンネル', keybind: 'w' },
      { description: '次の未読チャンネル', keybind: 'e' },
    ],
  },
  {
    groupDescription: 'チャンネル',
    groupIcon: <AmpStories style={{ fontSize: '1.2rem', verticalAlign: -3 }} />,
    keybinds: [
      { description: 'チャンネル', keybind: 'a' },
      { description: '検索', keybind: 's' },
      { description: 'お気に入り', keybind: 'd' },
    ],
  },
  {
    groupDescription: 'アクティビティ',
    groupIcon: <FlashOn style={{ fontSize: '1.2rem', verticalAlign: -3 }} />,
    keybinds: [
      { description: 'アクティビティ', keybind: 'z' },
      { description: '通知チャンネルのみ', keybind: 'x' },
      { description: '一つのメッセージのみ', keybind: 'c' },
    ],
  },
  {
    groupDescription: 'メッセージ',
    groupIcon: <Send style={{ fontSize: '1.2rem', verticalAlign: -3 }} />,
    keybinds: [
      { description: '新規メッセージ', keybind: 'n' },
      { description: '編集', keybind: 'ArrowUp' },
      { description: 'スタンプピッカー', keybind: 'm' },
      { description: '先頭のスタンプを押す', keybind: 'Space' },
      { description: '一番下にスクロール', keybind: 'b' },
      { description: 'スタンプ検索', keybind: 'h' },
      { description: 'n番目のスタンプピッカー', keybind: 'p, o, i, u, y, t' },
    ],
  },
  {
    groupIcon: (
      <DoubleArrow
        style={{
          fontSize: '1.2rem',
          verticalAlign: -2,
          transform: 'rotate(180deg)',
        }}
      />
    ),
    groupDescription: 'サイドバー',
    keybinds: [
      { description: 'サイドバー', keybind: 'l' },
      { description: '閲覧者', keybind: ';' },
    ],
  },
  {
    groupDescription: 'その他',
    groupIcon: (
      <LowPriority style={{ fontSize: '1.2rem', verticalAlign: -3 }} />
    ),
    keybinds: [
      { description: 'チャンネル移動', keybind: '0～9' },
      { description: 'テキストエリアの選択を解除', keybind: 'Escape' },
    ],
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f0f2f5',
    width: 500,
    maxWidth: 500,
    minWidth: 500,
    height: 600,
    maxHeight: 600,
    minHeight: 600,
    overflow: 'hidden',
  },
  appBar: {
    background: '#fafafa',
  },
  tab: {
    color: '#49535B',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    marginTop: 10,
    margin: 0,
    padding: 0,
  },
  textfield: {
    height: 40,
    marginTop: 4,
    marginBottom: 0,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#005bac',
  },
  shortcut: {
    height: 500,
    maxHeight: 496,
    width: 452,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  keybindGroup: {
    width: '45%',
    boxSizing: 'border-box',
    position: 'relative',
    marginTop: '0.5rem',
    padding: '1rem 2rem 0.5rem',
    border: '1px solid #aaa',
    borderRadius: '4px',
  },
  keybindGroupDescription: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: '1rem',
    padding: '0 0.8rem',
    margin: 0,
    background: '#f0f2f5',
    transform: 'translateY(-50%) translateX(1em)',
    color: '#888',
  },
  keybind: { margin: 2 },
  keybindDescription: {
    color: '#444',
    fontSize: '0.7rem',
    lineHeight: '0.7rem',
  },
  key: {
    textTransform: 'uppercase',
    color: '#c44',
    background: '#ecc',
    fontSize: '0.7rem',
    lineHeight: '0.7rem',
    padding: '0px 6px',
  },
  thumbnail: {
    height: 240,
    width: 'auto',
    boxShadow: '3px 3px 3px gray',
  },
}));

function TabPanel(props: TabPanelProps) {
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

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

let initialUrls: Record<string, string>;
browser.storage.sync
  .get(new Array(12).fill(null).map((_, i) => String(i)))
  .then((newValue) => {
    initialUrls = newValue;
  });

export const App = (): ReactElement => {
  const classes = useStyles();

  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (
    _event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number
  ) => {
    setTabIndex(newValue);
  };

  const [urls, setUrls] = useState(
    new Array(12).fill(null).map((_, i) => initialUrls[String(i)] as string)
  );
  const handleUrlChange = (index: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setUrls((currentUrls) => {
      const newState = [...currentUrls];
      newState[index] = value;
      return newState;
    });
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const currentUrls = await browser.storage.sync.get(
      new Array(12).fill(null).map((_, i) => String(i))
    );
    const storageKeys = new Array(12).fill(null).map((_, i) => i);
    storageKeys.forEach(async (storageKey) => {
      if (urls[storageKey] !== currentUrls[storageKey]) {
        await browser.storage.sync.set({ [storageKey]: urls[storageKey] });
      }
    });
  };

  function KeybindGroup(props: KeybindGroupProps) {
    const { groupDescription, groupIcon, keybinds } = props;
    return (
      <div className={classes.keybindGroup}>
        <div className={classes.keybindGroupDescription}>
          {groupIcon}
          {groupDescription}
        </div>
        {keybinds.map((v) => (
          <div className={classes.keybind}>
            <span className={classes.key}>{v.keybind}</span>:
            <span className={classes.keybindDescription}>{v.description}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="tabs"
          variant="fullWidth"
          TabIndicatorProps={{ style: { background: '#005bac' } }}
        >
          <Tab
            label="チャンネルリスト"
            {...a11yProps(0)}
            className={classes.tab}
          />
          <Tab
            label="ショートカットキー"
            {...a11yProps(1)}
            className={classes.tab}
          />
          <Tab label="背景・その他" {...a11yProps(1)} className={classes.tab} />
        </Tabs>
      </AppBar>
      <TabPanel value={tabIndex} index={0}>
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <form className={classes.form} noValidate onSubmit={onSubmit}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => (
                <TextField
                  key={v}
                  className={classes.textfield}
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  id={`url${v}`}
                  label={`${v}`}
                  name={`url${v}`}
                  value={urls[v]}
                  onChange={handleUrlChange(v)}
                  autoComplete="off"
                />
              ))}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                更新
              </Button>
            </form>
          </div>
        </Container>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <div className={classes.shortcut}>
          {keyBinds.map((prop) => (
            <KeybindGroup {...prop} />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <div className={classes.paper}>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            {[10].map((v) => (
              <TextField
                key={v}
                className={classes.textfield}
                variant="outlined"
                margin="dense"
                fullWidth
                id={`url${v}`}
                label="Background Image URL"
                name={`url${v}`}
                value={urls[v]}
                onChange={handleUrlChange(v)}
                autoComplete="off"
              />
            ))}
            {[11].map((v) => (
              <TextField
                key={v}
                className={classes.textfield}
                variant="outlined"
                margin="dense"
                fullWidth
                id={`url${v}`}
                label="Filter Color"
                name={`url${v}`}
                value={urls[v]}
                onChange={handleUrlChange(v)}
                autoComplete="off"
              />
            ))}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              背景・フィルタを設定（設定後要リロード）
            </Button>
          </form>
          <img className={classes.thumbnail} src={urls[10]} alt="thumbnail" />
          <div>
            <h4 style={{ margin: '14px 0px 6px' }}>Filter Color 設定の目安</h4>
            <div>ホワイトテーマ: rgba(255, 255, 255, 0.8)</div>
            <div>ダークテーマ: rgba(36, 43, 51, 0.8)</div>
          </div>
        </div>
      </TabPanel>
    </div>
  );
};
