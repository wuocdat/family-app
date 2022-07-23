import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Box } from '@mui/system';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { information } from '../../config/constants';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    // border: '1px solid #36404a',
    border: '1px solid grey[200]',
    '&:not(:last-child)': {
        marginBottom: '16px',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={
            <ArrowForwardIosSharpIcon
                sx={{ fontSize: '0.9rem', color: 'grey.900' }}
            />
        }
        {...props}
    />
))(({ theme }) => ({
    // backgroundColor: '#36404a',
    backgroundColor: theme.palette.primary.main,
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    color: theme.palette.grey[900],
    // '& .MuiAccordionSummary-content': {
    //     marginLeft: theme.spacing(1),
    // },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2.5),
    // border: '1px solid #36404a',
    // backgroundColor: '#262e35',
    backgroundColor: theme.palette.background.default,
    color: 'text.primary',
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
                sx={{ color: 'text.secondary', paddingBottom: '2px' }}
            >
                {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
                {content}
            </Typography>
        </Box>
    );
};

const AccordionProfile = () => {
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
                    <PersonOutlinedIcon
                        sx={{ marginRight: '8px', fontSize: '18px' }}
                    />
                    <Typography variant="body2">About</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ProfileItem name="Name" content={information.username} />
                    <ProfileItem name="Email" content={information.email} />
                    <ProfileItem name="Age" content={information.age} />
                    <ProfileItem
                        name="Location"
                        content={information.location}
                    />
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
                    <AttachFileIcon
                        sx={{ marginRight: '8px', fontSize: '18px' }}
                    />
                    <Typography variant="body2">Attached Files</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default AccordionProfile;
