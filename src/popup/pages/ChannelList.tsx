import { Container, TextField, Button } from '@material-ui/core';
import React, { FormEvent, ReactElement } from 'react';
import { browser } from 'webextension-polyfill-ts';

type Props = {
  classes: Classes;
  urls: string[];
  setUrls: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function ChannelList(props: Props): ReactElement {
  const { classes, urls, setUrls } = props;
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
  return (
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
              value={props.urls[v]}
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
  );
}
