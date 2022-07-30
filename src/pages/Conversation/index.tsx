import {
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
import { imageSrc2, userInformation } from '../../config/constants';
import { FiberManualRecord } from '@mui/icons-material';
import AccordionProfile from '../../components/Accordion/Accordion';
import LeftMessageItem from '../../components/MessageItem/LeftMessageItem';
import RightMessageItem from '../../components/MessageItem/RightMessageItem';

const ConversationWrapper = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: '#262e35',
    backgroundColor: theme.palette.background.default,
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
            <Box sx={{ flex: 1 }}>
                <LeftMessageItem />
                <RightMessageItem />
            </Box>
            <ConversationBoxFooter />

            {/* Drawer */}
            <Drawer anchor="right" open={drawerOpen}>
                <Box
                    width="380px"
                    height="100%"
                    sx={{
                        position: 'relative',
                        // backgroundColor: '#262e35',
                        backgroundColor: 'background.default',
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
                            color: 'text.secondary',
                        }}
                    >
                        <FiberManualRecord
                            sx={{ fontSize: '13px' }}
                            color="success"
                        />
                        Active
                    </Typography>
                    <Divider flexItem={true} sx={{ color: 'divider', mt: 2 }} />
                    <Box sx={{ padding: 3, overflowY: 'auto' }}>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                paddingBottom: '24px',
                            }}
                        >
                            If several languages coalesce, the grammar of the
                            resulting language is more simple and regular than
                            that of the individual.
                        </Typography>
                        <AccordionProfile data={userInformation} />
                    </Box>
                </Box>
            </Drawer>
        </ConversationWrapper>
    );
};

export default Conversation;
