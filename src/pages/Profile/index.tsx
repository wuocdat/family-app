import {
    alpha,
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
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

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '380px',
    height: '100vh',
    padding: theme.spacing(2, 1, 2, 1),
    boxSizing: 'border-box',
    backgroundColor: '#303841',
}));

const Header = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '22.5px',
    width: '100%',
    fontWeight: 500,
    padding: theme.spacing(1, 2, 3, 2),
    color: theme.palette.common.white,
}));

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
        <Container>
            <CustomModal open={openModal} onClose={handleCloseModal} />
            <Header>
                <span>My Profile</span>
                <Button onClick={handleClick}>
                    <MoreVertIcon />
                </Button>
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
            </Header>
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
            <Box sx={{ padding: '24px', overflowY: 'auto' }}>
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
        </Container>
    );
};

export default Profile;
