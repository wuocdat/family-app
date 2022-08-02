import { Box, Typography } from '@mui/material';

const NotFound = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                backgroundColor: 'background.default',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: ' 50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'text.primary',
                }}
            >
                No Pain No Gain
            </Typography>
        </Box>
    );
};

export default NotFound;
