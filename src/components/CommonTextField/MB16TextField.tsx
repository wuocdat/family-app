import { styled, TextField, TextFieldProps } from '@mui/material';

const MB16TextField = styled((props: TextFieldProps) => (
    <TextField
        fullWidth
        inputProps={{ style: { height: '50px' } }}
        {...props}
    />
))(({ theme }) => ({
    marginBottom: '16px',
}));

export default MB16TextField;
