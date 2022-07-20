import { Box, IconButton, Modal } from '@mui/material';
import BasicProfile from '../BasicProfile/BasicProfile';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { imageSrc2 } from '../../config/constants';

const modalBoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#262e35',
    color: '#fff',
    boxShadow: 24,
    p: 3,
    borderRadius: 1,
};

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

const CallingModal = ({ open, onClose }: ModalProps) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalBoxStyle}>
                <BasicProfile
                    name="Quoc Dat"
                    src={imageSrc2}
                    isCurrentUser={false}
                />
                <Box
                    paddingTop="32px"
                    width="150px"
                    display="flex"
                    justifyContent="space-between"
                >
                    <IconButton color="error">
                        <CancelIcon sx={{ fontSize: '50px' }} />
                    </IconButton>
                    <IconButton color="success">
                        <CheckCircleRoundedIcon sx={{ fontSize: '50px' }} />
                    </IconButton>
                </Box>
            </Box>
        </Modal>
    );
};

export default CallingModal;
