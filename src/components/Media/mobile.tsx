import { styled } from '@mui/material';

export const ShowOnlyMobile = styled('div')({
    '@media (min-width: 1000px)': {
        display: 'none',
    },
});

export const HideOnlyMobile = styled('div')({
    '@media (max-width: 999px)': {
        display: 'none',
    },
});
