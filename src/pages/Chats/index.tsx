import { Box, Typography } from '@mui/material';
import { FC, useState } from 'react';
import SideContentContainer from '../../components/Container/SideContentContainer';
import SideContentHeader from '../../components/Header/SideContentHeader';
import SearchUserInput from '../../components/SearchInput/SearchUserInput';
import UserItem from '../../components/UserItem/UserItem';
import UserOfferItem from '../../components/UserItem/UserOfferItem';
import { offerUsers, userItems } from '../../config/constants';
import ChatModal from './Modal/ChatModal';

const Chats: FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleModalClose = () => {
        setOpenModal(false);
    };
    const handleModalOpen = () => {
        setOpenModal(true);
    };
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
                {offerUsers.map((user, index) => {
                    return (
                        <UserOfferItem
                            key={index}
                            name={user.shortName}
                            src={user.src}
                            active={user.active}
                        />
                    );
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
                {userItems.map((user, index) => {
                    const { fullName, latestMessage, active, time, src } = user;
                    return (
                        <UserItem
                            key={index}
                            fullName={fullName}
                            src={src}
                            active={active}
                            time={time}
                            latestMessage={latestMessage || 'No pain no gain'}
                        />
                    );
                })}
            </Box>
        </SideContentContainer>
    );
};

export default Chats;
