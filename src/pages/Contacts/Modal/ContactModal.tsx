import {
    Box,
    Button,
    Divider,
    Modal,
    OutlinedInput,
    Typography,
} from '@mui/material';
import { Field, FieldProps, Form, Formik } from 'formik';
import { FC } from 'react';

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

interface ContactModalProps {
    open: boolean;
    onClose: () => void;
}
const ContactModal: FC<ContactModalProps> = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalBoxStyle}>
                <Typography variant="h6" sx={{ padding: '0 0 8px 0' }}>
                    Add Contact
                </Typography>
                <Divider color="#abb4d2" />
                <Formik
                    initialValues={{ email: '', message: '' }}
                    validate={(values) => {
                        interface Errors {
                            email?: string;
                        }
                        const errors: Errors = {};
                        if (!values.email) {
                            errors.email = 'Email is mandatory';
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
                            <Typography sx={{ padding: '16px 0 8px 0' }}>
                                Name
                            </Typography>
                            <Field name="email">
                                {({ field, form, meta }: FieldProps) => (
                                    <Box sx={{ marginBottom: 2 }}>
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
                            <Typography sx={{ padding: '8px 0' }}>
                                Invitation Message
                            </Typography>
                            <Field name="message">
                                {({ field, form, meta }: FieldProps) => (
                                    <Box sx={{ marginBottom: 2 }}>
                                        <OutlinedInput
                                            multiline
                                            rows={4}
                                            sx={{ color: '#fff' }}
                                            fullWidth
                                            type="text"
                                            placeholder="Enter Message"
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
                            <Divider color="#abb4d2" />

                            <Button
                                type="submit"
                                variant="outlined"
                                disabled={isSubmitting}
                                sx={{
                                    marginTop: 2,
                                }}
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

export default ContactModal;
