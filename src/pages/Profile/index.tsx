import {
    alpha,
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
import StyledMenu from '../../components/Menu/Menu';
import { Archive, FileCopy, MoreHoriz } from '@mui/icons-material';
import SideContentContainer from '../../components/Container/SideContentContainer';
import SideContentHeader from '../../components/Header/SideContentHeader';
import BasicProfile from '../../components/BasicProfile/BasicProfile';
import { imageSrc } from '../../config/constants';
import AccordionProfile from '../../components/Accordion/Accordion';

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

    return (
        <SideContentContainer>
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
                <BasicProfile
                    name="Patricia Smith"
                    src={imageSrc}
                    isCurrentUser
                />
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
