import { Avatar, Badge, Box, capitalize, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { UserInfo } from '../../types';

interface OfferItemProps {
    data: UserInfo;
}
const UserOfferItem = ({ data }: OfferItemProps) => {
    return (
        <Box
            sx={{
                width: '75px',
                height: '65px',
                paddingTop: 2,
                backgroundColor: 'transparent',
                position: 'relative',
            }}
        >
            <Link to="/contacts/001">
                <Badge
                    color={!!data.online ? 'success' : 'warning'}
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    {!!data.src ? (
                        <Avatar
                            sx={{
                                width: '35px',
                                height: '35px',
                            }}
                            alt="small user photo"
                            src={data.src}
                        />
                    ) : (
                        <Avatar
                            sx={{
                                width: '35px',
                                height: '35px',
                            }}
                            alt="small user photo"
                        >
                            {capitalize(data.username.slice(0, 1))}
                        </Avatar>
                    )}
                </Badge>
                <Box
                    sx={{
                        // backgroundColor: '#36404a',
                        backgroundColor: 'background.default',
                        height: '100%',
                        borderRadius: 2.5,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column-reverse',
                    }}
                >
                    <Typography
                        sx={{
                            paddingBottom: 1,
                            color: 'text.primary',
                            fontSize: '14px',
                        }}
                    >
                        {data.username}
                    </Typography>
                </Box>
            </Link>
        </Box>
    );
};

export default UserOfferItem;
