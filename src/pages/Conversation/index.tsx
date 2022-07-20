import {
    alpha,
    Box,
    Divider,
    Drawer,
    IconButton,
    styled,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ConversationBoxFooter from './ConversationBoxFooter/ConversationBoxFooter';
import ConversationHeader from './ConversationHeader/ConversationHeader';
import BasicProfile from '../../components/BasicProfile/BasicProfile';
import { imageSrc2 } from '../../config/constants';
import { FiberManualRecord } from '@mui/icons-material';
import AccordionProfile from '../../components/Accordion/Accordion';

const ConversationWrapper = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#262e35',
}));

const Conversation = () => {
    //drawer
    const [drawerOpen, setOpenDrawer] = useState(false);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };
    return (
        <ConversationWrapper>
            <ConversationHeader onClickProfileButton={handleDrawerOpen} />
            <Box sx={{ flex: 1 }}>Content</Box>
            <ConversationBoxFooter />

            {/* Drawer */}
            <Drawer anchor="right" open={drawerOpen}>
                <Box
                    width="380px"
                    height="100%"
                    sx={{
                        position: 'relative',
                        backgroundColor: '#262e35',
                        paddingTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <IconButton
                        onClick={handleDrawerClose}
                        sx={{
                            position: 'absolute',
                            top: 2,
                            right: 2,
                            color: '#fff',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <BasicProfile
                        name="Thanh Thuy"
                        src={imageSrc2}
                        isCurrentUser={false}
                    />
                    <Typography
                        variant="caption"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: alpha('#fff', 0.5),
                        }}
                    >
                        <FiberManualRecord
                            sx={{ fontSize: '13px' }}
                            color="success"
                        />
                        Active
                    </Typography>
                    <Divider
                        color=""
                        flexItem={true}
                        sx={{
                            backgroundColor: alpha('#fff', 0.1),
                        }}
                    />
                    <Box sx={{ padding: 3, overflowY: 'auto' }}>
                        <Typography
                            variant="body2"
                            sx={{
                                color: alpha('#fff', 0.5),
                                paddingBottom: '24px',
                            }}
                        >
                            If several languages coalesce, the grammar of the
                            resulting language is more simple and regular than
                            that of the individual.
                        </Typography>
                        <AccordionProfile />
                    </Box>
                </Box>
            </Drawer>
        </ConversationWrapper>
    );
};

export default Conversation;
