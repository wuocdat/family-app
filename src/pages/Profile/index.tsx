import {
    Box,
    Divider,
    IconButton,
    MenuItem,
    styled,
    Typography,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StyledMenu from '../../components/Menu/Menu';
import { Archive, FileCopy, MoreHoriz } from '@mui/icons-material';
import SideContentContainer from '../../components/Container/SideContentContainer';
import SideContentHeader from '../../components/Header/SideContentHeader';
import BasicProfile from '../../components/BasicProfile/BasicProfile';
import AccordionProfile from '../../components/Accordion/Accordion';
import { UserInfo } from '../../types';
import UserService from '../../services/users/user.service';
import TokenService from '../../services/auth/token.service';

const UserProfile = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(2, 2, 3, 2),
    color: theme.palette.text.primary,
}));

const defaultUser: UserInfo = {
    id: '',
    username: '',
    email: '',
};

const Profile: FC = () => {
    const currentUser = TokenService.getUser();
    const [user, setUser] = useState<UserInfo>(defaultUser);
    //menu
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const fetchUserInfo = async () => {
        try {
            const { data } = await UserService.getProfile(currentUser.id);

            data && setUser(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    return (
        <SideContentContainer>
            <SideContentHeader>
                <span>My Profile</span>
                <IconButton onClick={handleClick}>
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
                    name={`${user?.username}`}
                    src={!!user.src ? user.src : undefined}
                    isCurrentUser
                />
                <Typography
                    variant="caption"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'text.secondary',
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
                    backgroundColor: 'divider',
                }}
            />
            <Box sx={{ padding: 3, overflowY: 'auto' }}>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'text.secondary',
                        paddingBottom: '24px',
                    }}
                >
                    {user?.description ||
                        `If several languages coalesce, the grammar of the resulting
                    language is more simple and regular than that of the
                    individual.`}
                </Typography>
                <AccordionProfile data={user} />
            </Box>
        </SideContentContainer>
    );
};

export default Profile;
