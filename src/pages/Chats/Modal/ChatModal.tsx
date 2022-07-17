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
    left: '50%',
    width: '500px',
    marginTop: 3,
    transform: 'translateX(-50%)',
    bgcolor: '#262e35',
    color: '#fff',
    boxShadow: 24,
    p: 2,
    borderRadius: 1,
};

interface ChatModalProps {
    open: boolean;
    onClose: () => void;
}
const ChatModal: FC<ChatModalProps> = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalBoxStyle}>
                <Typography variant="h6" sx={{ padding: '0 0 8px 0' }}>
                    Add Member
                </Typography>
                <Divider color="#abb4d2" />
                <Typography sx={{ padding: '16px 0 8px 0' }}>Name</Typography>
                <Formik
                    initialValues={{ name: '' }}
                    validate={(values) => {
                        interface Errors {
                            name?: string;
                        }
                        const errors: Errors = {};
                        if (!values.name) {
                            errors.name = 'Name is mandatory';
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
                                    <Box sx={{ marginBottom: 2 }}>
                                        <OutlinedInput
                                            sx={{ color: '#fff' }}
                                            inputProps={{
                                                style: {
                                                    height: '45px',
                                                },
                                            }}
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

export default ChatModal;
