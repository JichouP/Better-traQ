import React, { ReactElement } from 'react';

type Props = KeybindGroupProps & { classes: Classes };

export function KeybindGroup(props: Props): ReactElement {
  const { groupDescription, groupIcon, keybinds, classes } = props;
  return (
    <div className={classes.keybindGroup}>
      <div className={classes.keybindGroupDescription}>
        {groupIcon}
        {groupDescription}
      </div>
      {keybinds.map((v) => (
        <div key={v.keybind} className={classes.keybind}>
          <span className={classes.key}>{v.keybind}</span>:
          <span className={classes.keybindDescription}>{v.description}</span>
        </div>
      ))}
    </div>
  );
}
