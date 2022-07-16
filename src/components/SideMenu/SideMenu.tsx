import {
    alpha,
    Button,
    styled,
    Tooltip,
    tooltipClasses,
    TooltipProps,
} from '@mui/material';
import { FC } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from 'react-router-dom';
import { routes } from '../../config/routes';

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75px',
    height: '100vh',
    padding: theme.spacing(2, 0.5, 2, 0.5),
    boxSizing: 'border-box',
    backgroundColor: '#36404a',
}));

const OptionWrapper = styled('div')(({ theme }) => ({
    // margin: theme.spacing(0.5, 0.5, 0.5, 0.5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}));

const SettingWrapper = styled('div')(({ theme }) => ({
    // margin: theme.spacing(0.5, 0.5, 0.5, 0.5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}));

const StyledLink = styled(Link)(({ theme }) => ({
    padding: theme.spacing(1, 0, 1, 0),
    width: '56px',
    height: '56px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.dark,
    // backgroundColor: alpha('#fff', 0.05),
}));

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: '#3F4E4F',
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#3F4E4F',
        padding: theme.spacing(1, 1.8, 1, 1.8),
        fontSize: '14px',
        letterSpacing: '1.8px',
    },
}));

const SideMenu: FC = () => {
    return (
        <Container>
            <Button>
                <WhatsAppIcon sx={{ fontSize: '2rem' }} />
            </Button>
            <OptionWrapper>
                <BootstrapTooltip
                    placement="top"
                    disableInteractive={true}
                    title="Profile"
                    arrow
                >
                    <StyledLink to={routes.profile}>
                        <PersonOutlinedIcon sx={{ fontSize: '2rem' }} />
                    </StyledLink>
                </BootstrapTooltip>
                <BootstrapTooltip
                    placement="top"
                    disableInteractive={true}
                    title="Chats"
                    arrow
                >
                    <StyledLink to={routes.chats}>
                        <CommentRoundedIcon />
                    </StyledLink>
                </BootstrapTooltip>
                <BootstrapTooltip
                    placement="top"
                    disableInteractive={true}
                    title="Contacts"
                    arrow
                >
                    <StyledLink to={routes.contacts}>
                        <ContactMailRoundedIcon />
                    </StyledLink>
                </BootstrapTooltip>
                <BootstrapTooltip
                    placement="top"
                    disableInteractive={true}
                    title="Settings"
                    arrow
                >
                    <StyledLink to={routes.settings}>
                        <SettingsRoundedIcon />
                    </StyledLink>
                </BootstrapTooltip>
            </OptionWrapper>
            <SettingWrapper>
                <BootstrapTooltip
                    placement="top"
                    disableInteractive={true}
                    title="Light Mode"
                    arrow
                >
                    <StyledLink to="/chats">
                        <LightModeRoundedIcon />
                    </StyledLink>
                </BootstrapTooltip>
                <StyledLink to="/chats">
                    <AccountCircleRoundedIcon />
                </StyledLink>
            </SettingWrapper>
        </Container>
    );
};

export default SideMenu;
