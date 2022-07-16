import { styled } from '@mui/material';

const SideContentContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '380px',
    height: '100vh',
    padding: theme.spacing(2, 1, 2, 1),
    boxSizing: 'border-box',
    backgroundColor: '#303841',
}));

export default SideContentContainer;
