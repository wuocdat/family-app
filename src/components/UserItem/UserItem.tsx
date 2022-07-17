import { Avatar, Badge, Box, styled, Typography } from '@mui/material';
import { UserItemProps } from '../../types';

const ItemWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '15px 16px',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#36404a',
        borderRadius: theme.spacing(1),
        cursor: 'pointer',
    },
}));

const UserItem = ({
    fullName,
    src,
    latestMessage = 'No pain no gain',
    active,
    time,
}: UserItemProps) => {
    return (
        <ItemWrapper>
            <Badge
                color={active ? 'success' : 'warning'}
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
                <Typography>{fullName}</Typography>
                <Typography variant="body2" color="#abb4d2">
                    {latestMessage}
                </Typography>
            </Box>
            <Typography variant="body2" color="#abb4d2">
                {time}
            </Typography>
        </ItemWrapper>
    );
};

export default UserItem;
