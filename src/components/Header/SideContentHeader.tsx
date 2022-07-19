import { styled } from '@mui/material';

const SideContentHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '22.5px',
    width: '100%',
    height: '52px',
    fontWeight: 500,
    padding: theme.spacing(1, 2, 3, 2),
    color: theme.palette.common.white,
}));

export default SideContentHeader;
