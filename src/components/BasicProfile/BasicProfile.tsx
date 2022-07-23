import { Edit } from '@mui/icons-material';
import {
    alpha,
    Avatar,
    Badge,
    capitalize,
    Typography,
    useTheme,
} from '@mui/material';
import { FC, useState } from 'react';
import CustomModal from '../../pages/Profile/Modal/Modal';
import { setText } from '../../utils';

interface BasicProfileProps {
    name: string;
    src?: string;
    isCurrentUser: boolean;
}

const BasicProfile: FC<BasicProfileProps> = ({ name, src, isCurrentUser }) => {
    //Modal here
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const theme = useTheme();

    return (
        <>
            <CustomModal open={openModal} onClose={handleCloseModal} />

            {isCurrentUser ? (
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <Edit
                            sx={{
                                // backgroundColor: '#36404a',
                                backgroundColor: 'background.default',
                                borderRadius: '50%',
                                padding: '4px',
                                color: 'primary.main',
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
                                borderColor: alpha(
                                    theme.palette.primary.main,
                                    0.2,
                                ),
                                // borderColor: 'primary.main',
                            }}
                        />
                    ) : (
                        <Avatar
                            alt="user photo"
                            sx={{
                                width: 96,
                                height: 96,
                                border: '5px double',
                                // borderColor: alpha('#fff', 0.05),
                                // borderColor: 'primary.main',
                                borderColor: alpha(
                                    theme.palette.primary.main,
                                    0.2,
                                ),
                            }}
                        >
                            {capitalize(name.slice(0, 1))}
                        </Avatar>
                    )}
                </Badge>
            ) : !!src ? (
                <Avatar
                    alt="user photo"
                    src={src}
                    sx={{
                        width: 96,
                        height: 96,
                        border: '5px double',
                        // borderColor: alpha('#fff', 0.05),
                        // borderColor: 'primary.main',
                        borderColor: alpha(theme.palette.primary.main, 0.2),
                    }}
                />
            ) : (
                <Avatar
                    alt="user photo"
                    sx={{
                        width: 96,
                        height: 96,
                        border: '5px double',
                        // borderColor: alpha('#fff', 0.05),
                        // borderColor: 'primary.main',
                        borderColor: alpha(theme.palette.primary.main, 0.2),
                    }}
                >
                    {capitalize(name.slice(0, 1))}
                </Avatar>
            )}

            <Typography
                sx={{
                    fontSize: '16px',
                    paddingTop: '24px',
                    color: 'text.primary',
                }}
            >
                {setText(name)}
            </Typography>
        </>
    );
};

export default BasicProfile;
