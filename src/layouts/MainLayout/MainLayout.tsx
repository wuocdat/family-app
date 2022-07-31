import { styled } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';
import SideMenu from '../../components/SideMenu/SideMenu';
import Chats from '../../pages/Chats';
import Contacts from '../../pages/Contacts';
import Conversation from '../../pages/Conversation';
import Profile from '../../pages/Profile';
import Settings from '../../pages/Settings';

const Container = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0, 0, 0),
    display: 'flex',
}));

const ChatContent = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0, 0, 0),
    flex: 1,
}));

const MainLayout = () => {
    const [alignment, setAlignment] = useState('profile');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };
    return (
        <Container>
            <SideMenu alignment={alignment} handleChange={handleChange} />
            {alignment === 'profile' && <Profile />}
            {alignment === 'chats' && <Chats />}
            {alignment === 'contacts' && <Contacts />}
            {alignment === 'settings' && <Settings />}
            <ChatContent>
                <Routes>
                    <Route path="/:_id" element={<Conversation />} />
                    {/* <Route
                        path="/user/:_useId"
                        element={<div>User Profile</div>}
                    /> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
                {/* <Conversation /> */}
            </ChatContent>
        </Container>
    );
};

export default MainLayout;
