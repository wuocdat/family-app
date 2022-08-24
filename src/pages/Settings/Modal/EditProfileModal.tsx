import { Box, Button, Modal } from '@mui/material';
import { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { FC, useContext, useState } from 'react';
import * as yup from 'yup';
import MB16TextField from '../../../components/CommonTextField/MB16TextField';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import UserService from '../../../services/users/user.service';

const modalBoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '500px',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#262e35',
    color: '#fff',
    boxShadow: 24,
    p: 2,
    borderRadius: 1,
};

const validationSchema = yup.object({
    username: yup
        .string()
        .min(8, 'username should be of minimum 8 characters length')
        .required('username is required'),
    firstName: yup.string(),
    lastName: yup.string(),
    address: yup.string(),
    age: yup.number().positive().integer(),
    description: yup.string(),
    phoneNumber: yup.string(),
});

interface EditProfileModalProps {
    open: boolean;
    handleClose: () => void;
}

const EditProfileModal: FC<EditProfileModalProps> = ({ open, handleClose }) => {
    const { profile, setProfile } = useContext(CurrentUserContext);

    const { enqueueSnackbar } = useSnackbar();
    const [isUpdating, setStatus] = useState(false);
    const {
        _id,
        username,
        firstName,
        lastName,
        address,
        age,
        description,
        phoneNumber,
    } = profile;
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username,
            firstName,
            lastName,
            address,
            age,
            phoneNumber,
            description,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            updateProfile(values);
        },
    });

    const updateProfile = async (reqData: any) => {
        try {
            setStatus(true);
            const { data } = await UserService.updateProfile(_id, reqData);
            enqueueSnackbar('update profile successfully!', {
                variant: 'success',
            });
            data && setProfile(data);
        } catch (error) {
            if (error instanceof AxiosError) {
                if (
                    error.response &&
                    error.response?.data &&
                    error.response?.data.message
                )
                    enqueueSnackbar(error.response.data.message, {
                        variant: 'error',
                    });
                else enqueueSnackbar(error.message, { variant: 'error' });
            } else console.log(error);
        } finally {
            setStatus(false);
            handleClose();
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalBoxStyle}>
                <form onSubmit={formik.handleSubmit}>
                    <MB16TextField
                        id="username"
                        name="username"
                        label="User Name"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.username &&
                            Boolean(formik.errors.username)
                        }
                        helperText={
                            formik.touched.username && formik.errors.username
                        }
                    />
                    <MB16TextField
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.firstName &&
                            Boolean(formik.errors.firstName)
                        }
                        helperText={
                            formik.touched.firstName && formik.errors.firstName
                        }
                    />
                    <MB16TextField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.lastName &&
                            Boolean(formik.errors.lastName)
                        }
                        helperText={
                            formik.touched.lastName && formik.errors.lastName
                        }
                    />
                    <MB16TextField
                        id="address"
                        name="address"
                        label="Location"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.address &&
                            Boolean(formik.errors.address)
                        }
                        helperText={
                            formik.touched.address && formik.errors.address
                        }
                    />
                    <MB16TextField
                        id="description"
                        name="description"
                        label="Description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.description &&
                            Boolean(formik.errors.description)
                        }
                        helperText={
                            formik.touched.description &&
                            formik.errors.description
                        }
                    />
                    <MB16TextField
                        id="age"
                        name="age"
                        label="Age"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        error={formik.touched.age && Boolean(formik.errors.age)}
                        helperText={formik.touched.age && formik.errors.age}
                    />
                    <MB16TextField
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Phone Number"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.phoneNumber &&
                            Boolean(formik.errors.phoneNumber)
                        }
                        helperText={
                            formik.touched.phoneNumber &&
                            formik.errors.phoneNumber
                        }
                    />

                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                        disabled={isUpdating}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default EditProfileModal;
