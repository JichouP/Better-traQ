import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f0f2f5',
    width: 500,
    maxWidth: 500,
    minWidth: 500,
    height: 600,
    maxHeight: 600,
    minHeight: 600,
    overflow: 'scroll',
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
    marginTop: 0,
    margin: 0,
    padding: 0,
  },
  textfield: {
    height: 38,
    marginTop: 4,
    marginBottom: 0,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#005bac',
  },
  shortcut: {
    // height: 500,
    maxHeight: 700,
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
