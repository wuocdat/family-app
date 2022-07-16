import { Avatar, Badge, Box, Typography } from '@mui/material';

interface OfferItemProps {
    name: string;
    src: string;
    active?: boolean;
}
const UserOfferItem = ({ name, src, active }: OfferItemProps) => {
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
            <Badge
                color={active ? 'success' : 'warning'}
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
                <Avatar
                    sx={{
                        width: '35px',
                        height: '35px',
                    }}
                    alt="small user photo"
                    src={src}
                />
            </Badge>
            <Box
                sx={{
                    backgroundColor: '#36404a',
                    height: '100%',
                    borderRadius: 2.5,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column-reverse',
                }}
            >
                <Typography
                    sx={{ paddingBottom: 1, color: '#fff', fontSize: '14px' }}
                >
                    {name}
                </Typography>
            </Box>
        </Box>
    );
};

export default UserOfferItem;
