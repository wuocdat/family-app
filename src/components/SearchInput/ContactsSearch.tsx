import { Search as SearchIcon } from '@mui/icons-material';
import { Box, IconButton, InputBase, Paper } from '@mui/material';

const ContactsSearch = () => {
    return (
        <Box sx={{ width: '100%', padding: '0 16px' }}>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    backgroundColor: '#36404a',
                }}
            >
                <IconButton sx={{ p: '10px', color: '#fff' }} aria-label="menu">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1, color: '#fff' }}
                    placeholder="Search users..."
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
            </Paper>
        </Box>
    );
};

export default ContactsSearch;
