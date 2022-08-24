import {
    Block,
    MoreVert,
    Share,
    DeleteSweepRounded,
} from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import { FC, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TokenService from '../../services/auth/token.service';
import ChatService from '../../services/chat/chat.service';
import { UserInfo } from '../../types';
import StyledMenu from '../Menu/Menu';
import StyledMenuItem from '../MenuItem/MenuItem';

interface UserNameItemProps {
    user: UserInfo;
}

const UserNameItem: FC<UserNameItemProps> = ({ user }) => {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const currentUser = useMemo(() => TokenService.getUser(), []);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleItemClick = async () => {
        try {
            const { data } = await ChatService.getConversationByMemberIds([
                currentUser._id,
                user._id,
            ]);
            if (data) {
                navigate(`${data._id}`, { replace: true });
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                if (
                    error.response &&
                    error.response?.data &&
                    error.response?.data.message
                )
                    enqueueSnackbar(error.response.data.message, {
                        variant: 'error',
                    });
                else enqueueSnackbar(error.message, { variant: 'error' });
            } else console.log(error);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0 8px 16px',
                '&:hover': {
                    backgroundColor: 'action.hover',
                    borderRadius: 1,
                    cursor: 'pointer',
                },
            }}
            onClick={handleItemClick}
        >
            <Typography
                sx={{
                    flex: 1,
                    color: 'text.primary',
                }}
            >
                {user.username}
            </Typography>
            <IconButton
                sx={{
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
