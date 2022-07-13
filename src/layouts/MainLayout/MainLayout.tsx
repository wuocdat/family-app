import { FC } from 'react';

const MainLayout: FC<{ children: JSX.Element }> = ({ children }) => {
    return <div>{children}</div>;
};

export default MainLayout;
