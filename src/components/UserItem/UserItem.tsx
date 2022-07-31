import { Avatar, Badge, Box, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Conversation } from '../../types';
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
    conversation: Conversation;
}

const UserItem: FC<UserItemProps> = ({ conversation }) => {
    const navigate = useNavigate();
    const { online, firstName, lastName, src } = conversation.friend;
    const { lastContent, lastTime } = conversation.lastMessage;
    const fullName = firstName.concat(' ', lastName);
    return (
        <ItemWrapper
            onClick={() => {
                navigate(`/messages/${conversation.id}`);
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
                        {fullName.slice(0, 1)}
                    </Avatar>
                )}
            </Badge>
            <Box sx={{ flex: 1, paddingLeft: 2 }}>
                <Typography color="text.primary">{fullName}</Typography>
                {/* <Typography variant="body2" color="#abb4d2"> */}
                <Typography variant="body2" color="text.secondary">
                    {lastContent.length > 45
                        ? collapseText(lastContent, 50)
                        : lastContent}
                </Typography>
            </Box>
            {/* <Typography variant="body2" color="#abb4d2"> */}
            <Typography variant="body2" color="text.secondary">
                {lastTime}
            </Typography>
        </ItemWrapper>
    );
};

export default UserItem;
