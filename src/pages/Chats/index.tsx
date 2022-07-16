import { Box } from '@mui/material';
import { flexbox } from '@mui/system';
import { FC } from 'react';
import SideContentContainer from '../../components/Container/SideContentContainer';
import SideContentHeader from '../../components/Header/SideContentHeader';
import SearchUserInput from '../../components/SearchInput/SearchUserInput';
import UserOfferItem from '../../components/UserItem/UserOfferItem';
import { offerUsers } from '../../config/constants';

const Chats: FC = () => {
    return (
        <SideContentContainer>
            <SideContentHeader>
                <span>Chats</span>
            </SideContentHeader>
            <SearchUserInput />
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
        </SideContentContainer>
    );
};

export default Chats;
