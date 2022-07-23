import { MoreHorizRounded } from '@mui/icons-material';
import { Avatar, Box, IconButton, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { imageSrc2 } from '../../config/constants';
import StyledMenu from '../Menu/Menu';
import StyledMenuItem from '../MenuItem/MenuItem';

const StyledContentWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(1.5, 1.5, 1.5, 1.5),
    marginTop: theme.spacing(2),
}));

const LeftMessageItem = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                padding: 3,
            }}
        >
            <Box display="flex">
                <Avatar alt="user avatar" src={imageSrc2} />
            </Box>
            <Box ml="8px">
                <Typography color="text.primary" fontWeight="600">
                    Thanh Thuy
                </Typography>
                <StyledContentWrapper>
                    <Typography>
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual.
                    </Typography>
                </StyledContentWrapper>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography color="text.primary" variant="caption">
                        10:00 am
                    </Typography>
                    <IconButton onClick={handleClick}>
                        <MoreHorizRounded />
                    </IconButton>
                </Box>
            </Box>
            {/* menu */}
            <StyledMenu
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleClose}
            >
                <StyledMenuItem onClick={handleClose} disableRipple>
                    <Typography>Reply</Typography>
                </StyledMenuItem>
                <StyledMenuItem onClick={handleClose} disableRipple>
                    Edit
                </StyledMenuItem>
                <StyledMenuItem onClick={handleClose} disableRipple>
                    Delete
                </StyledMenuItem>
            </StyledMenu>
        </Box>
    );
};

export default LeftMessageItem;
