import {
    AttachFile,
    Send,
    SentimentSatisfiedOutlined,
} from '@mui/icons-material';
import { Box, IconButton, styled, TextField } from '@mui/material';

const FooterWrapper = styled('div')(({ theme }) => ({
    height: '85px',
    display: 'flex',
    padding: theme.spacing(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #36404a',
}));
const ConversationBoxFooter = () => {
    return (
        <FooterWrapper>
            <TextField
                InputProps={{
                    disableUnderline: true,
                }}
                placeholder="Type Message"
                variant="standard"
                sx={{
                    flex: 1,
                    backgroundColor: '#36404a',
                    borderRadius: 1,
                    height: '100%',
                    '& .MuiInputBase-root': {
                        height: '100%',
                        paddingLeft: '8px',
                    },
                    '& .MuiInputBase-input': {
                        color: '#fff',
                    },
                }}
            />
            <Box sx={{ padding: '0 16px' }}>
                <IconButton sx={{ color: '#fff', padding: 1.5 }}>
                    <SentimentSatisfiedOutlined />
                </IconButton>
                <IconButton sx={{ color: '#fff', padding: 1.5 }}>
                    <AttachFile />
                </IconButton>
                <IconButton sx={{ color: '#fff', padding: 1.5 }}>
                    <Send />
                </IconButton>
            </Box>
        </FooterWrapper>
    );
};

export default ConversationBoxFooter;
