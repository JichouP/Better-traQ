import { TextField, Button } from '@material-ui/core';
import React, { FormEvent, ReactElement } from 'react';
import { browser } from 'webextension-polyfill-ts';

type Props = {
  classes: Classes;
  urls: string[];
  setUrls: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function BackgroundSettings(props: Props): ReactElement {
  const { classes, urls, setUrls } = props;

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

  return (
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
  );
}
