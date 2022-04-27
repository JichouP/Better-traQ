import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => <div>{children}</div>;

export default Layout;
