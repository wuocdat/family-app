import { styled } from '@mui/material';

export const ShowOnlyMobile = styled('div')({
    '@media (min-width: 600px)': {
        display: 'none',
    },
});

export const HideOnlyMobile = styled('div')({
    '@media (max-width: 599px)': {
        display: 'none',
    },
});
