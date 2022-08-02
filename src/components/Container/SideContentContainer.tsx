import { styled } from '@mui/material';

const SideContentContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2, 1, 2, 1),
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
    '@media (max-width: 999px)': {
        flex: 1,
        width: '100%',
    },
    '@media (min-width: 1000px)': {
        height: '100vh',
        minWidth: '380px',
        maxWidth: '380px',
    },
    overflow: 'auto',
}));

export default SideContentContainer;
