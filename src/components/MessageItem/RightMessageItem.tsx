import { MoreHorizRounded } from '@mui/icons-material';
import { Avatar, Box, IconButton, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { imageSrc3 } from '../../config/constants';
import StyledMenu from '../Menu/Menu';
import StyledMenuItem from '../MenuItem/MenuItem';

const StyledContentWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(1.5, 1.5, 1.5, 1.5),
    marginTop: theme.spacing(2),
}));

const RightMessageItem = () => {
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
                flexDirection: 'row-reverse',
                padding: 3,
            }}
        >
            <Box display="flex">
                <Avatar alt="user avatar" src={imageSrc3} />
            </Box>
            <Box mr="8px">
                <Typography
                    color="text.primary"
                    mr="8px"
                    fontWeight="600"
                    textAlign="right"
                >
                    You
                </Typography>
                <StyledContentWrapper>
                    <Typography color="text.primary">
                        If several languages coalesce, the grammar of the
                        resulting language is more simple and regular than that
                        of the individual.
                    </Typography>
                </StyledContentWrapper>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse',
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

export default RightMessageItem;
