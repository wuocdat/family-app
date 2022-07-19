import {
    alpha,
    Box,
    Divider,
    MenuItem,
    styled,
    Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import BasicProfile from '../../components/BasicProfile/BasicProfile';
import SideContentContainer from '../../components/Container/SideContentContainer';
import SideContentHeader from '../../components/Header/SideContentHeader';
import { imageSrc } from '../../config/constants';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import StyledMenu from '../../components/Menu/Menu';
import SettingAccordion from './Accordion/Accordion';

const UserProfile = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(2, 2, 3, 2),
    color: theme.palette.common.white,
}));

const Settings: FC = () => {
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
                <span>Chats</span>
            </SideContentHeader>
            <UserProfile>
                <BasicProfile name="Patricia Smith" src={imageSrc} />
                <Typography
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: alpha('#fff', 0.5),
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
            <Divider
                color=""
                flexItem={true}
                sx={{
                    backgroundColor: alpha('#fff', 0.1),
                }}
            />
            <Box sx={{ width: '100%', padding: 3, overflowY: 'auto' }}>
                <SettingAccordion />
            </Box>
        </SideContentContainer>
    );
};

export default Settings;
