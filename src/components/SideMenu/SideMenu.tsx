import {
    Button,
    capitalize,
    IconButton,
    styled,
    ToggleButton,
    ToggleButtonGroup,
    Tooltip,
    tooltipClasses,
    TooltipProps,
    useTheme,
} from '@mui/material';
import { FC, useContext } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from 'react-router-dom';
import { iconConst } from '../../config/constants';
import { ColorModeContext } from '../../App';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75px',
    height: '100vh',
    padding: theme.spacing(2, 0.5, 2, 0.5),
    boxSizing: 'border-box',
    // backgroundColor: '#36404a',
    backgroundColor: theme.palette.background.default,
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
    color: theme.palette.primary.main,
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    margin: theme.spacing(1, 0),
    // color: '#fff',
    color: theme.palette.text.primary,
    border: 'none',
    width: '56px',
    height: '56px',
    borderRadius: '8px !important',
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

interface SideMenuProps {
    handleChange: (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => void;
    alignment: string;
}

const SideMenu: FC<SideMenuProps> = ({ alignment, handleChange }) => {
    //theme
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Container>
            <Button>
                <WhatsAppIcon sx={{ fontSize: '2rem' }} />
            </Button>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={(
                    event: React.MouseEvent<HTMLElement>,
                    newAlignment: string,
                ) => {
                    handleChange(event, newAlignment);
                }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <StyledToggleButton
                    value="profile"
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <BootstrapTooltip title={capitalize(iconConst.profile)}>
                        <PersonOutlinedIcon sx={{ fontSize: '2rem' }} />
                    </BootstrapTooltip>
                </StyledToggleButton>

                <StyledToggleButton
                    value="chats"
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <BootstrapTooltip title={capitalize(iconConst.chats)}>
                        <CommentRoundedIcon />
                    </BootstrapTooltip>
                </StyledToggleButton>

                <StyledToggleButton
                    value="contacts"
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <BootstrapTooltip title={capitalize(iconConst.contacts)}>
                        <ContactMailRoundedIcon />
                    </BootstrapTooltip>
                </StyledToggleButton>

                <StyledToggleButton
                    value="settings"
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <BootstrapTooltip title={capitalize(iconConst.settings)}>
                        <SettingsRoundedIcon />
                    </BootstrapTooltip>
                </StyledToggleButton>
            </ToggleButtonGroup>
            <SettingWrapper>
                <BootstrapTooltip
                    title={
                        theme.palette.mode === 'light'
                            ? 'Light Mode'
                            : 'Dark Mode'
                    }
                >
                    <IconButton
                        onClick={colorMode.toggleColorMode}
                        sx={{
                            padding: theme.spacing(1, 0, 1, 0),
                            width: '56px',
                            height: '56px',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: theme.palette.primary.main,
                        }}
                    >
                        {theme.palette.mode === 'dark' ? (
                            <Brightness7 />
                        ) : (
                            <Brightness4 />
                        )}
                    </IconButton>
                </BootstrapTooltip>
                <StyledLink to="/messages/">
                    <AccountCircleRoundedIcon />
                </StyledLink>
            </SettingWrapper>
        </Container>
    );
};

export default SideMenu;
