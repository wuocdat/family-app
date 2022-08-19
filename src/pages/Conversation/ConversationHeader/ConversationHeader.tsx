import {
    Archive,
    ArrowBack,
    Call,
    DeleteSweepRounded,
    FiberManualRecord,
    MoreVertOutlined,
    PersonOutlineOutlined,
    Search,
    VideoCallOutlined,
    VolumeOff,
} from '@mui/icons-material';
import {
    Avatar,
    Box,
    IconButton,
    styled,
    TextField,
    Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShowOnlyMobile } from '../../../components/Media/mobile';
import StyledMenu from '../../../components/Menu/Menu';
import StyledMenuItem from '../../../components/MenuItem/MenuItem';
import CallingModal from '../../../components/Modal/CallingModal';
import { imageSrc } from '../../../config/constants';
import { UserInfo } from '../../../types';

const HeaderWrapper = styled('div')(({ theme }) => ({
    height: '85px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottom: '1px solid #36404a',
    borderBottom: '0.5px solid',
    borderColor: theme.palette.divider,
}));

type ConversationHeaderProps = {
    onClickProfileButton: () => void;
    user: UserInfo | undefined;
};

const ConversationHeader: FC<ConversationHeaderProps> = ({
    onClickProfileButton,
    user,
}) => {
    //search menu
    const [anchorSearchMenuEl, setAnchorSearchMenuEl] =
        useState<null | HTMLElement>(null);
    const open = Boolean(anchorSearchMenuEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorSearchMenuEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorSearchMenuEl(null);
    };

    //action menu
    const [anchorActionMenuEl, setAnchorActionMenuEl] =
        useState<null | HTMLElement>(null);
    const actionMenuOpen = Boolean(anchorActionMenuEl);
    const handleActionButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        setAnchorActionMenuEl(event.currentTarget);
    };
    const handleActionMenuClose = () => {
        setAnchorActionMenuEl(null);
    };

    //modal
    const [modalOpen, setModalOpen] = useState(false);
    const handleClickCallButton = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    let navigate = useNavigate();

    return (
        <HeaderWrapper>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 3,
                }}
            >
                <ShowOnlyMobile>
                    <IconButton
                        sx={{ marginRight: 2 }}
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        <ArrowBack />
                    </IconButton>
                </ShowOnlyMobile>
                <Avatar
                    sx={{
                        width: '35px',
                        height: '35px',
                    }}
                    alt="small user photo"
                    src={imageSrc}
                />
                <Typography
                    pl="16px"
                    pr="8px"
                    sx={{ fontWeight: 600, color: 'text.primary' }}
                >
                    {user?.username}
                </Typography>
                <FiberManualRecord
                    sx={{ fontSize: '15px' }}
                    color={!!user?.online ? 'success' : 'warning'}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: 3,
                }}
            >
                <IconButton onClick={handleClick} sx={{ padding: 1.5 }}>
                    <Search />
                </IconButton>

                <IconButton
                    onClick={handleClickCallButton}
                    sx={{ padding: 1.5 }}
                >
                    <Call />
                </IconButton>
                <IconButton
                    onClick={handleClickCallButton}
                    sx={{ padding: 1.5 }}
                >
                    <VideoCallOutlined />
                </IconButton>
                <IconButton
                    onClick={onClickProfileButton}
                    sx={{ padding: 1.5 }}
                >
                    <PersonOutlineOutlined />
                </IconButton>
                <IconButton
                    onClick={handleActionButtonClick}
                    sx={{ padding: 1.5 }}
                >
                    <MoreVertOutlined />
                </IconButton>
            </Box>

            {/* Search Menu */}
            <StyledMenu
                anchorEl={anchorSearchMenuEl}
                open={open}
                onClose={handleClose}
            >
                <Box sx={{ backgroundColor: '#303841', margin: '-4px 0' }}>
                    <TextField
                        InputProps={{
                            disableUnderline: true,
                        }}
                        variant="standard"
                        sx={{
                            backgroundColor: '#36404a',
                            borderRadius: 1,
                            margin: '8px 8px',
                            '& .MuiInputBase-input': {
                                color: '#fff',
                                height: '35px',
                            },
                        }}
                    />
                </Box>
            </StyledMenu>

            {/* action menu */}
            <StyledMenu
                anchorEl={anchorActionMenuEl}
                open={actionMenuOpen}
                onClose={handleActionMenuClose}
            >
                <StyledMenuItem onClick={handleClose} disableRipple>
                    <Typography>Archive</Typography>
                    <Archive />
                </StyledMenuItem>
                <StyledMenuItem onClick={handleClose} disableRipple>
                    Muted
                    <VolumeOff />
                </StyledMenuItem>
                <StyledMenuItem onClick={handleClose} disableRipple>
                    Delete
                    <DeleteSweepRounded />
                </StyledMenuItem>
            </StyledMenu>
            <CallingModal open={modalOpen} onClose={handleCloseModal} />
        </HeaderWrapper>
    );
};

export default ConversationHeader;
