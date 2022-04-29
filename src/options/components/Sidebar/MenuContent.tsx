import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import pageState from '@/options/states/pageState';
import onKeyDownHandler from '@/options/utils/onKeyDownHandler';

type Props = {
  title: string;
  icon: React.ReactElement;
  targetPage: Page;
};

const MenuContent: FC<Props> = ({ title, icon, targetPage }) => {
  const [currentPage, setPage] = useRecoilState(pageState);
  return (
    <li className="pb-1">
      <div
        role="button"
        className={currentPage === targetPage ? 'active' : ''}
        onClick={() => setPage(targetPage)}
        tabIndex={0}
        onKeyDown={onKeyDownHandler}
      >
        {icon}
        {title}
      </div>
    </li>
  );
};

export default MenuContent;
