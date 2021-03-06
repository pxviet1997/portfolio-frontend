/* eslint-disable object-curly-newline */
import React from 'react';
import {
  Button,
  CardContent,
  Grid,
  TextField,
  Modal,
  Typography
} from "@mui/material";
import { Formik } from 'formik';
import { reqSendEmail } from '../api';
import emailjs from 'emailjs-com';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const ContactFormModal = ({ open, setOpen, }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SERVICE_ID = 'service_rvlr3q5';
  const TEMPLATE_ID = 'template_f8n65j3';
  const USER_ID = 'user_VmyNvlu1URIMajsCDd1hB';

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CardContent sx={style}>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            // console.log(values);
            // await reqSendEmail(values);
            try {
              const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID);
              console.log(result);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({
            handleChange,
            handleSubmit,
            isSubmitting,
            values,
          }) => {
            return (
              <>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>

                    <Grid item lg={12} md={12} xs={12}>
                      <Typography id="modal-modal-title" variant="h3" component="h2">
                        Send Me a Message!
                      </Typography>
                    </Grid>

                    <Grid item lg={6} md={6} xs={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        required
                        onChange={handleChange}
                        value={values.title}
                      />
                    </Grid>

                    <Grid item lg={6} md={6} xs={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        required
                        onChange={handleChange}
                        value={values.title}
                      />
                    </Grid>

                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        required
                        onChange={handleChange}
                        value={values.title}
                      />
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        required
                        onChange={handleChange}
                        value={values.title}
                      />
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        onChange={handleChange}
                        required
                        value={values.description}
                        variant="outlined"
                        multiline
                        rows={15}
                      />
                    </Grid>

                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        Cancel
                      </Button>
                    </Grid>

                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Send
                      </Button>
                    </Grid>

                  </Grid>
                </form>
              </>
            );
          }}
        </Formik>
      </CardContent>
    </Modal>
  );
};

export default ContactFormModal;
