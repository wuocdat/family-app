import { Field, FieldProps, Form, Formik } from 'formik';
import { Box, Button, Modal, OutlinedInput, Typography } from '@mui/material';

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

const modalInput = {
    marginBottom: 2,
};

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

const CustomModal = ({ open, onClose }: ModalProps) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalBoxStyle}>
                <Typography
                    sx={{
                        marginBottom: 3,
                    }}
                    variant="h6"
                >
                    Update Profile
                </Typography>
                <Formik
                    initialValues={{ name: '', email: '', location: '' }}
                    validate={(values) => {
                        interface Errors {
                            email?: string;
                            name?: string;
                            location?: string;
                        }
                        const errors: Errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email,
                            )
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field name="name">
                                {({ field, form, meta }: FieldProps) => (
                                    <Box sx={modalInput}>
                                        <OutlinedInput
                                            sx={{ color: '#fff' }}
                                            fullWidth
                                            type="text"
                                            placeholder="Enter name"
                                            {...field}
                                        />
                                        {meta.touched && meta.error && (
                                            <Typography
                                                variant="caption"
                                                color="error"
                                            >
                                                {meta.error}
                                            </Typography>
                                        )}
                                    </Box>
                                )}
                            </Field>
                            <Field name="email">
                                {({ field, form, meta }: FieldProps) => (
                                    <Box sx={modalInput}>
                                        <OutlinedInput
                                            sx={{ color: '#fff' }}
                                            fullWidth
                                            type="email"
                                            placeholder="Enter email"
                                            {...field}
                                        />
                                        {meta.touched && meta.error && (
                                            <Typography
                                                sx={{
                                                    fontSize: '10px',
                                                    marginLeft: 1,
                                                }}
                                                variant="caption"
                                                color="error"
                                            >
                                                {meta.error}
                                            </Typography>
                                        )}
                                    </Box>
                                )}
                            </Field>
                            <Field name="location">
                                {({ field, form, meta }: FieldProps) => (
                                    <Box sx={modalInput}>
                                        <OutlinedInput
                                            sx={{ color: '#fff' }}
                                            fullWidth
                                            type="text"
                                            placeholder="Enter location"
                                            {...field}
                                        />
                                        {meta.touched && meta.error && (
                                            <Typography
                                                variant="caption"
                                                color="error"
                                            >
                                                {meta.error}
                                            </Typography>
                                        )}
                                    </Box>
                                )}
                            </Field>
                            <Button
                                type="submit"
                                variant="outlined"
                                disabled={isSubmitting}
                            >
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Modal>
    );
};

export default CustomModal;
