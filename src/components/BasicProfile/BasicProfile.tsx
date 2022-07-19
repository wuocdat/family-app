import { Edit } from '@mui/icons-material';
import { alpha, Avatar, Badge, capitalize, Typography } from '@mui/material';
import { FC, useState } from 'react';
import CustomModal from '../../pages/Profile/Modal/Modal';
import { setText } from '../../utils';

interface BasicProfileProps {
    name: string;
    src?: string;
}

const BasicProfile: FC<BasicProfileProps> = ({ name, src }) => {
    //Modal here
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    return (
        <>
            <CustomModal open={openModal} onClose={handleCloseModal} />

            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                    <Edit
                        sx={{
                            backgroundColor: '#36404a',
                            borderRadius: '50%',
                            padding: '4px',
                            cursor: 'pointer',
                        }}
                    />
                }
                onClick={handleOpenModal}
            >
                {!!src ? (
                    <Avatar
                        alt="user photo"
                        src={src}
                        sx={{
                            width: 96,
                            height: 96,
                            border: '5px double',
                            borderColor: alpha('#fff', 0.05),
                        }}
                    />
                ) : (
                    <Avatar
                        alt="user photo"
                        sx={{
                            width: 96,
                            height: 96,
                            border: '5px double',
                            borderColor: alpha('#fff', 0.05),
                        }}
                    >
                        {capitalize(name.slice(0, 1))}
                    </Avatar>
                )}
            </Badge>

            <Typography sx={{ fontSize: '16px', paddingTop: '24px' }}>
                {setText(name)}
            </Typography>
        </>
    );
};

export default BasicProfile;
