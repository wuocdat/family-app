import {
    Block,
    MoreVert,
    Share,
    DeleteSweepRounded,
} from '@mui/icons-material';
import { Box, IconButton, MenuItem, styled, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { User } from '../../types';
import StyledMenu from '../Menu/Menu';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: theme.spacing(1, -1, 1, 0.5),
}));

const UserNameItem: FC<User> = (user) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#fff',
                padding: '8px 0 8px 16px',
                '&:hover': {
                    backgroundColor: '#36404a',
                    borderRadius: 1,
                    cursor: 'pointer',
                },
            }}
        >
            <Typography
                sx={{
                    flex: 1,
                }}
            >
                {user.name}
            </Typography>
            <IconButton
                sx={{
                    color: '#fff',
                    '&.MuiButtonBase-root': {
                        paddingRight: 0,
                    },
                }}
                onClick={handleClick}
            >
                <MoreVert />
            </IconButton>
            <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <StyledMenuItem onClick={handleClose} disableRipple>
                    <Typography>Share</Typography>
                    <Share />
                </StyledMenuItem>
                <StyledMenuItem onClick={handleClose} disableRipple>
                    Block
                    <Block />
                </StyledMenuItem>
                <StyledMenuItem onClick={handleClose} disableRipple>
                    Remove
                    <DeleteSweepRounded />
                </StyledMenuItem>
            </StyledMenu>
        </Box>
    );
};

export default UserNameItem;
