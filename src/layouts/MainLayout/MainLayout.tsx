import { styled } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HideOnlyMobile, ShowOnlyMobile } from '../../components/Media/mobile';
import NotFound from '../../components/NotFound/NotFound';
import BottomMenu from '../../components/SideMenu/BottomMenu';
import SideMenu from '../../components/SideMenu/SideMenu';
import { ConversationContextProvider } from '../../contexts/ConversationContext';
import CurrentUserContextProvider from '../../contexts/CurrentUserContext';
import Chats from '../../pages/Chats';
import Contacts from '../../pages/Contacts';
import Conversation from '../../pages/Conversation';
import Profile from '../../pages/Profile';
import Settings from '../../pages/Settings';

const Container = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0, 0, 0),
    display: 'flex',
}));

const MobileContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0, 0, 0),
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
}));

const ChatContent = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0, 0, 0),
    height: '100vh',
    flex: 1,
}));

const MainLayout = () => {
    const [alignment, setAlignment] = useState('profile');

    const handleChange = (
        event: React.MouseEvent<HTMLElement> | SyntheticEvent<Element, Event>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };
    return (
        <CurrentUserContextProvider>
            <>
                <HideOnlyMobile>
                    <Container>
                        <SideMenu
                            alignment={alignment}
                            handleChange={handleChange}
                        />
                        {alignment === 'profile' && <Profile />}
                        {alignment === 'chats' && <Chats />}
                        {alignment === 'contacts' && <Contacts />}
                        {alignment === 'settings' && <Settings />}
                        <ChatContent>
                            <Routes>
                                <Route
                                    path="/:_id"
                                    element={
                                        <ConversationContextProvider>
                                            <Conversation />
                                        </ConversationContextProvider>
                                    }
                                />
                                {/* <Route
                                path="/user/:_useId"
                                element={<div>User Profile</div>}
                            /> */}
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                            {/* <Conversation /> */}
                        </ChatContent>
                    </Container>
                </HideOnlyMobile>
                <ShowOnlyMobile>
                    <Routes>
                        <Route
                            path="/:_id"
                            element={
                                <ConversationContextProvider>
                                    <Conversation />
                                </ConversationContextProvider>
                            }
                        />
                        <Route
                            path="/"
                            element={
                                <MobileContainer>
                                    {alignment === 'profile' && <Profile />}
                                    {alignment === 'chats' && <Chats />}
                                    {alignment === 'contacts' && <Contacts />}
                                    {alignment === 'settings' && <Settings />}
                                    <BottomMenu
                                        alignment={alignment}
                                        handleChange={handleChange}
                                    />
                                </MobileContainer>
                            }
                        />
                    </Routes>
                </ShowOnlyMobile>
            </>
        </CurrentUserContextProvider>
    );
};

export default MainLayout;
