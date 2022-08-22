import { Box, Divider, MenuItem, styled, Typography } from '@mui/material';
import { FC, useContext, useState } from 'react';
import BasicProfile from '../../components/BasicProfile/BasicProfile';
import SideContentContainer from '../../components/Container/SideContentContainer';
import SideContentHeader from '../../components/Header/SideContentHeader';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import StyledMenu from '../../components/Menu/Menu';
import SettingAccordion from './Accordion/Accordion';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const UserProfile = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(2, 2, 3, 2),
    color: theme.palette.text.primary,
}));
const Settings: FC = () => {
    //menu
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const { profile } = useContext(CurrentUserContext);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <SideContentContainer>
            <SideContentHeader>
                <span>Chats</span>
            </SideContentHeader>
            <UserProfile>
                <BasicProfile
                    name={profile?.username || 'username'}
                    src={profile?.src}
                    isCurrentUser
                />
                <Typography
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'text.secondary',
                        fontSize: '15px',
                        paddingTop: 1,
                        cursor: 'pointer',
                    }}
                    onClick={handleClick}
                >
                    Available
                    <ExpandMoreOutlinedIcon />
                </Typography>
                <StyledMenu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} disableRipple>
                        Available
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        Busy
                    </MenuItem>
                </StyledMenu>
            </UserProfile>
            <Divider flexItem={true} />
            <Box sx={{ width: '100%', padding: 3, overflowY: 'auto' }}>
                <SettingAccordion />
            </Box>
        </SideContentContainer>
    );
};

export default Settings;
