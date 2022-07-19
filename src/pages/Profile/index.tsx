import {
    alpha,
    Avatar,
    Badge,
    Box,
    Divider,
    IconButton,
    MenuItem,
    styled,
    Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AccordionProfile from './Accordion/Accordion';
import StyledMenu from '../../components/Menu/Menu';
import { Archive, FileCopy, MoreHoriz } from '@mui/icons-material';
import CustomModal from './Modal/Modal';
import SideContentContainer from '../../components/Container/SideContentContainer';
import SideContentHeader from '../../components/Header/SideContentHeader';

const UserProfile = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(2, 2, 3, 2),
    color: theme.palette.common.white,
}));

const Profile: FC = () => {
    //menu
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Modal here
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <SideContentContainer>
            <CustomModal open={openModal} onClose={handleCloseModal} />
            <SideContentHeader>
                <span>My Profile</span>
                <IconButton sx={{ color: '#fff' }} onClick={handleClick}>
                    <MoreVertIcon />
                </IconButton>
                <StyledMenu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} disableRipple>
                        <EditIcon />
                        Edit
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <FileCopy />
                        Duplicate
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={handleClose} disableRipple>
                        <Archive />
                        Archive
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <MoreHoriz />
                        More
                    </MenuItem>
                </StyledMenu>
            </SideContentHeader>
            <UserProfile>
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <EditIcon
                            sx={{
                                backgroundColor: '#36404a',
                                borderRadius: '50%',
                                padding: '4px',
                                cursor: 'pointer',
                            }}
                        />
                    }
                    onClick={handleOpenModal}
                >
                    <Avatar
                        alt="user photo"
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2f5ea0aa35f6b3ca8155cdcc8a236124~c5_100x100.jpeg?x-expires=1657890000&x-signature=WzNCLIEPuvS31OTCZBE87TgEe%2FQ%3D"
                        sx={{
                            width: 96,
                            height: 96,
                            border: '5px double',
                            borderColor: alpha('#fff', 0.05),
                        }}
                    />
                </Badge>

                <Typography sx={{ fontSize: '16px', paddingTop: '24px' }}>
                    Patricia Smith
                </Typography>
                <Typography
                    variant="caption"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: alpha('#fff', 0.5),
                    }}
                >
                    <FiberManualRecordIcon
                        sx={{ fontSize: '13px' }}
                        color="success"
                    />
                    Active
                </Typography>
            </UserProfile>
            <Divider
                color=""
                flexItem={true}
                sx={{
                    backgroundColor: alpha('#fff', 0.1),
                }}
            />
            <Box sx={{ padding: 3, overflowY: 'auto' }}>
                <Typography
                    variant="body2"
                    sx={{
                        color: alpha('#fff', 0.5),
                        paddingBottom: '24px',
                    }}
                >
                    If several languages coalesce, the grammar of the resulting
                    language is more simple and regular than that of the
                    individual.
                </Typography>
                <AccordionProfile />
            </Box>
        </SideContentContainer>
    );
};

export default Profile;
