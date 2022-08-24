import { Avatar, Badge, Box, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { OneToOneConversationType } from '../../types/dto.interface';
import { collapseText } from '../../utils';

const ItemWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '15px 16px',
    color: theme.palette.text.primary,
    '&:hover': {
        // backgroundColor: '#36404a',
        backgroundColor: theme.palette.action.hover,
        borderRadius: theme.spacing(1),
        cursor: 'pointer',
    },
}));

interface UserItemProps {
    conversation: OneToOneConversationType;
}

const UserItem: FC<UserItemProps> = ({ conversation }) => {
    const navigate = useNavigate();
    const { lastMessage, timestamp } = conversation;
    const { online, username, src } = conversation.friend;
    return (
        <ItemWrapper
            onClick={() => {
                navigate(`${conversation._id}`);
            }}
        >
            <Badge
                color={online ? 'success' : 'warning'}
                overlap="circular"
                badgeContent=" "
                variant="dot"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                {!!src ? (
                    <Avatar
                        sx={{
                            width: '35px',
                            height: '35px',
                        }}
                        alt="user avatar"
                        src={src}
                    />
                ) : (
                    <Avatar
                        sx={{
                            width: '35px',
                            height: '35px',
                        }}
                        alt="user avatar"
                    >
                        {username.slice(0, 1)}
                    </Avatar>
                )}
            </Badge>
            <Box sx={{ flex: 1, paddingLeft: 2 }}>
                <Typography color="text.primary">{username}</Typography>
                {/* <Typography variant="body2" color="#abb4d2"> */}
                <Typography variant="body2" color="text.secondary">
                    {!!lastMessage
                        ? lastMessage.length > 45
                            ? collapseText(lastMessage, 50)
                            : lastMessage
                        : 'No pain no gain'}
                </Typography>
            </Box>
            {/* <Typography variant="body2" color="#abb4d2"> */}
            <Typography variant="body2" color="text.secondary">
                {timestamp || '10:00pm'}
            </Typography>
        </ItemWrapper>
    );
};

export default UserItem;
