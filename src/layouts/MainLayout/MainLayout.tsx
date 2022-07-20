import { styled } from '@mui/material';
import { FC } from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import Conversation from '../../pages/Conversation';

const Container = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0, 0, 0),
    display: 'flex',
}));

const ChatContent = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0, 0, 0),
    flex: 1,
    backgroundColor: '#ccc',
}));

const MainLayout: FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <Container>
            <SideMenu />
            {children}
            <ChatContent>
                <Conversation />
            </ChatContent>
        </Container>
    );
};

export default MainLayout;
