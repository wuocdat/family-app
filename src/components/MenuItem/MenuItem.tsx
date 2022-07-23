import { MenuItem, styled } from '@mui/material';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: theme.spacing(1, -1, 1, 0.5),
}));

export default StyledMenuItem;
