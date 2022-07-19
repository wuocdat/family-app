import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { information } from '../../../config/constants';
import { Box } from '@mui/system';
import { Button, Divider, DividerProps, Switch } from '@mui/material';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { ExpandMoreOutlined } from '@mui/icons-material';

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255,255,255,.35)'
                : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    paddingTop: theme.spacing(2),
    fontSize: '14px',
}));

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: '1px solid #36404a',
    '&:not(:last-child)': {
        marginBottom: '16px',
    },
}));

const StyledDivider = styled((props: DividerProps) => (
    <Divider color="#abb4d2" {...props} />
))(({ theme }) => ({
    color: '#fff',
    opacity: 0.2,
    marginTop: theme.spacing(2),
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={
            <ArrowForwardIosSharpIcon
                sx={{ fontSize: '0.9rem', color: '#fff' }}
            />
        }
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: '#36404a',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    color: '#fff',
    // '& .MuiAccordionSummary-content': {
    //     marginLeft: theme.spacing(1),
    // },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2.5),
    // border: '1px solid #36404a',
    backgroundColor: '#262e35',
    color: '#fff',
}));

interface ProfileItemProps {
    name: string;
    content: string | number;
}

const ProfileItem = ({ name, content }: ProfileItemProps) => {
    return (
        <Box sx={{ padding: '8px 0' }}>
            <Typography
                variant="body1"
                sx={{ color: '#9aa1b9', paddingBottom: '2px' }}
            >
                {name}
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff' }}>
                {content}
            </Typography>
        </Box>
    );
};

const SettingAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    // set accordion to open or close
    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                >
                    <Typography variant="body2">Personal Info</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ position: 'relative' }}>
                        <ProfileItem
                            name="Name"
                            content={information.username}
                        />
                        <ProfileItem name="Email" content={information.email} />
                        <ProfileItem name="Age" content={information.age} />
                        <ProfileItem
                            name="Location"
                            content={information.location}
                        />
                        <Button
                            sx={{
                                position: 'absolute',
                                top: 1,
                                right: 1,
                                textTransform: 'none',
                            }}
                            variant="contained"
                            startIcon={<BorderColorOutlinedIcon />}
                            size="small"
                        >
                            Edit
                        </Button>
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
            >
                <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                >
                    <Typography variant="body2">Privacy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: 2,
                        }}
                    >
                        <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>
                            Profile photo
                        </Typography>
                        <Button
                            size="small"
                            variant="contained"
                            sx={{ fontSize: '13px', textTransform: 'none' }}
                        >
                            Everyone
                            <ExpandMoreOutlined sx={{ fontSize: '13px' }} />
                        </Button>
                    </Box>
                    <StyledDivider />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: 2,
                        }}
                    >
                        <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>
                            Last seen
                        </Typography>
                        <AntSwitch
                            defaultChecked
                            inputProps={{ 'aria-label': 'ant design' }}
                        />
                    </Box>
                    <StyledDivider />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: 2,
                        }}
                    >
                        <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>
                            Status
                        </Typography>
                        <Button
                            size="small"
                            variant="contained"
                            sx={{ fontSize: '13px', textTransform: 'none' }}
                        >
                            Everyone
                            <ExpandMoreOutlined sx={{ fontSize: '13px' }} />
                        </Button>
                    </Box>
                    <StyledDivider />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: 2,
                        }}
                    >
                        <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>
                            Read receipts
                        </Typography>
                        <AntSwitch
                            defaultChecked
                            inputProps={{ 'aria-label': 'ant design' }}
                        />
                    </Box>
                    <StyledDivider />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: 2,
                        }}
                    >
                        <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>
                            Groups
                        </Typography>
                        <Button
                            size="small"
                            variant="contained"
                            sx={{ fontSize: '13px', textTransform: 'none' }}
                        >
                            Everyone
                            <ExpandMoreOutlined sx={{ fontSize: '13px' }} />
                        </Button>
                    </Box>
                    <StyledDivider />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
            >
                <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                >
                    <Typography variant="body2">Security</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: 2,
                        }}
                    >
                        <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>
                            Show security notification
                        </Typography>
                        <AntSwitch
                            defaultChecked
                            inputProps={{ 'aria-label': 'ant design' }}
                        />
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
            >
                <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                >
                    <Typography variant="body2">Help</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledTypography>FAQs</StyledTypography>
                    <StyledDivider />
                    <StyledTypography>Contact</StyledTypography>
                    <StyledDivider />
                    <StyledTypography>Term & Privacy policy</StyledTypography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default SettingAccordion;
