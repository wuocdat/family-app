import { createTheme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography: TypographyOptions = {
    fontFamily: 'ProximaNova',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
};

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fbc531',
        },
        background: {
            default: '#f5f6fa',
            paper: '#dcdde1',
        },
    },
    typography,
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#e1b12c',
        },
        background: {
            default: '#2f3640',
            paper: '#353b48',
        },
    },
    typography,
});
