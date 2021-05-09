import { Container, TextField, Button } from '@material-ui/core';
import React, { FormEvent, ReactElement } from 'react';
import {
  CustomStorage,
  getData,
  setData,
  Channel,
  channels,
} from '@/utils/storage';

type Props = {
  classes: Classes;
  store: CustomStorage;
  setStore: React.Dispatch<React.SetStateAction<CustomStorage>>;
};

export default function ChannelList(props: Props): ReactElement {
  const { classes, store, setStore } = props;

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const currentUrls = await getData(channels);
    await Promise.all(
      channels.map((channel) => {
        if (store[channel] === currentUrls[channel]) return;
        return setData({ [channel]: store[channel] });
      })
    );
  };

  const handleChange = (key: Channel) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setStore((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          {channels.map((v) => (
            <TextField
              key={v}
              className={classes.textfield}
              variant="outlined"
              margin="dense"
              fullWidth
              id={v}
              label={v}
              name={v}
              value={store[v] || ''}
              onChange={handleChange(v)}
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
