import { TextField, Button } from '@material-ui/core';
import React, { FormEvent, ReactElement } from 'react';
import {
  Background,
  backgrounds,
  CustomStorage,
  FilterColor,
  filterColors,
  getData,
  setData,
} from '@/utils/storage';

type Props = {
  classes: Classes;
  store: CustomStorage;
  setStore: React.Dispatch<React.SetStateAction<CustomStorage>>;
};

export default function BackgroundSettings(props: Props): ReactElement {
  const { classes, store, setStore } = props;

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const keyList = [...backgrounds, ...filterColors];
    const currentData = await getData(keyList);
    await Promise.all(
      keyList.map((key) => {
        if (store[key] === currentData[key]) return;
        return setData({ [key]: store[key] });
      })
    );
  };

  const handleChange =
    (key: Background | FilterColor) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setStore((prev) => ({ ...prev, [key]: value }));
    };

  return (
    <div className={classes.paper}>
      <form className={classes.form} noValidate onSubmit={onSubmit}>
        {[backgrounds[0]].map((background) => (
          <TextField
            key={background}
            className={classes.textfield}
            variant="outlined"
            margin="dense"
            fullWidth
            id={background}
            label={background}
            name={background}
            value={store[background] || ''}
            onChange={handleChange(background)}
            autoComplete="off"
          />
        ))}
        {[filterColors[0]].map((filterColor) => (
          <TextField
            key={filterColor}
            className={classes.textfield}
            variant="outlined"
            margin="dense"
            fullWidth
            id={filterColor}
            label={filterColor}
            name={filterColor}
            value={store[filterColor] || ''}
            onChange={handleChange(filterColor)}
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
          背景・フィルタを設定
        </Button>
      </form>
      <img
        className={classes.thumbnail}
        src={store.background0}
        alt="thumbnail"
      />
      <div>
        <h4 style={{ margin: '14px 0px 6px' }}>Filter Color 設定の目安</h4>
        <div>ホワイトテーマ: rgba(255, 255, 255, 0.8)</div>
        <div>ダークテーマ: rgba(36, 43, 51, 0.8)</div>
      </div>
    </div>
  );
}
