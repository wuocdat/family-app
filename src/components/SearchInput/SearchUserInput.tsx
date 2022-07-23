import { Search as SearchIcon } from '@mui/icons-material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Box, IconButton, InputBase, Paper } from '@mui/material';
import { FC } from 'react';

interface SearchUserInputProps {
    onSearch: () => void;
}
const SearchUserInput: FC<SearchUserInputProps> = ({ onSearch }) => {
    return (
        <Box sx={{ width: '100%', padding: '0 16px' }}>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    // backgroundColor: '#36404a',
                    backgroundColor: 'background.default',
                }}
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton
                    sx={{ p: '10px' }}
                    aria-label="search"
                    onClick={onSearch}
                >
                    <PersonAddAltIcon />
                </IconButton>
            </Paper>
        </Box>
    );
};

export default SearchUserInput;
