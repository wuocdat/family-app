import { Box, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import SideContentContainer from '../../components/Container/SideContentContainer';
import SideContentHeader from '../../components/Header/SideContentHeader';
import SearchUserInput from '../../components/SearchInput/SearchUserInput';
import UserItem from '../../components/UserItem/UserItem';
import UserOfferItem from '../../components/UserItem/UserOfferItem';
import { requestAPI } from '../../services/ApiServices';
import UserService from '../../services/users/user.service';
import { Conversation, UserInfo } from '../../types';
import ChatModal from './Modal/ChatModal';

const defaultUser: UserInfo[] = [
    {
        id: '',
        email: '',
        username: '',
    },
];

const Chats: FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleModalClose = () => {
        setOpenModal(false);
    };
    const handleModalOpen = () => {
        setOpenModal(true);
    };

    const [users, setUsers] = useState<UserInfo[]>(defaultUser);
    const [conversations, setConversations] = useState<Conversation[]>();

    const fetchUsers = async () => {
        try {
            const { data } = await UserService.getAllUsers();
            data && setUsers(data);
            console.log('data', data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchConversations = async () => {
        try {
            const { data } = await requestAPI.get<Conversation[]>(
                '/conversations',
            );
            data && setConversations(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUsers();
        fetchConversations();
    }, []);

    return (
        <SideContentContainer>
            {/* header */}
            <SideContentHeader>
                <span>Chats</span>
            </SideContentHeader>

            {/* search bar */}
            <SearchUserInput onSearch={handleModalOpen} />
            <ChatModal open={openModal} onClose={handleModalClose} />

            {/* offer user box */}
            <Box
                sx={{
                    width: '100%',
                    padding: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                {users.slice(0, 4).map((user, index) => {
                    return <UserOfferItem key={index} data={user} />;
                })}
            </Box>

            <Box
                color="text.primary"
                sx={{ width: '100%', padding: '16px 16px 8px' }}
            >
                <Typography>Recent</Typography>
            </Box>

            {/* all user */}
            <Box sx={{ width: '100%', padding: '0 8px', overflow: 'auto' }}>
                {conversations &&
                    conversations.map((conversation, index) => {
                        return (
                            <UserItem key={index} conversation={conversation} />
                        );
                    })}
            </Box>
        </SideContentContainer>
    );
};

export default Chats;
