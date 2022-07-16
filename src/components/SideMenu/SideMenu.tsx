import {
    alpha,
    Button,
    capitalize,
    styled,
    Tooltip,
    tooltipClasses,
    TooltipProps,
} from '@mui/material';
import { FC, useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from 'react-router-dom';
import { routes } from '../../config/routes';
import { iconConst } from '../../config/constants';

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
    '&.active': {
        backgroundColor: alpha('#fff', 0.05),
        borderRadius: theme.spacing(1),
    },
}));

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
        {...props}
        placement="top"
        disableInteractive={true}
        arrow
        enterNextDelay={700}
        classes={{ popper: className }}
    />
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
    const [currentPoint, setCurrentPoint] = useState('profile');
    return (
        <Container>
            <Button>
                <WhatsAppIcon sx={{ fontSize: '2rem' }} />
            </Button>
            <OptionWrapper>
                <BootstrapTooltip title={capitalize(iconConst.profile)}>
                    <StyledLink
                        className={
                            currentPoint === iconConst.profile ? 'active' : ''
                        }
                        onClick={() => {
                            setCurrentPoint(iconConst.profile);
                        }}
                        to={routes.profile}
                    >
                        <PersonOutlinedIcon sx={{ fontSize: '2rem' }} />
                    </StyledLink>
                </BootstrapTooltip>
                <BootstrapTooltip title={capitalize(iconConst.chats)}>
                    <StyledLink
                        className={
                            currentPoint === iconConst.chats ? 'active' : ''
                        }
                        onClick={() => {
                            setCurrentPoint(iconConst.chats);
                        }}
                        to={routes.chats}
                    >
                        <CommentRoundedIcon />
                    </StyledLink>
                </BootstrapTooltip>
                <BootstrapTooltip title={capitalize(iconConst.contacts)}>
                    <StyledLink
                        className={
                            currentPoint === iconConst.contacts ? 'active' : ''
                        }
                        onClick={() => {
                            setCurrentPoint(iconConst.contacts);
                        }}
                        to={routes.contacts}
                    >
                        <ContactMailRoundedIcon />
                    </StyledLink>
                </BootstrapTooltip>
                <BootstrapTooltip title={capitalize(iconConst.settings)}>
                    <StyledLink
                        className={
                            currentPoint === iconConst.settings ? 'active' : ''
                        }
                        onClick={() => {
                            setCurrentPoint(iconConst.settings);
                        }}
                        to={routes.settings}
                    >
                        <SettingsRoundedIcon />
                    </StyledLink>
                </BootstrapTooltip>
            </OptionWrapper>
            <SettingWrapper>
                <BootstrapTooltip title="Light Mode">
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
