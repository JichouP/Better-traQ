/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import onKeyDownHandler from '@/options/utils/onKeyDownHandler';

type Props = {
  isActive: boolean;
  onClick: () => void;
};

const OnOffButton: FC<Props> = ({ isActive, onClick }) => (
  <label
    className={`swap ${isActive ? 'swap-active' : ''}`}
    onClick={onClick}
    onKeyDown={onKeyDownHandler}
  >
    <div className="swap-on">ON</div>
    <div className="swap-off">OFF</div>
  </label>
);

export default OnOffButton;
