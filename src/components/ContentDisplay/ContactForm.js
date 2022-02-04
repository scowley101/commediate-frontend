// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ContactForm = () => {
        const encode = (data) =>
                Object.keys(data)
                        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
                        .join('&');
        return (
                <div>
                        <h1>Any place in your app!</h1>
                        <Formik
                                initialValues={{ fullName: '', email: '', message: '' }}
                                validate={(values) => {
                                        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                                        const errors = {};
                                        if (!values.fullName) {
                                                errors.fullName = 'Name Required';
                                        }
                                        if (!values.email || !emailRegex.test(values.email)) {
                                                errors.email = 'Valid Email Required';
                                        }
                                        if (!values.message) {
                                                errors.message = 'Message Required';
                                        }
                                        return errors;
                                }}
                                onSubmit={(values, actions) => {
                                        fetch('/', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                                body: encode({ 'form-name': 'contact', ...values }),
                                        })
                                                .then(() => {
                                                        alert('Success');
                                                        actions.resetForm();
                                                })
                                                .catch(() => {
                                                        alert('Error');
                                                })
                                                .finally(() => actions.setSubmitting(false));
                                }}
                        >
                                {({ isSubmitting }) => (
                                        <Form name="contact" data-netlify>
                                                <label htmlFor="fullName">Full Name</label>
                                                <Field id="fullName" name="fullName" placeholder="Your full name" />
                                                <ErrorMessage name="fullName" component="div" />

                                                <label htmlFor="email">Email</label>
                                                <Field
                                                        id="email"
                                                        name="email"
                                                        placeholder="jane@acme.com"
                                                        type="email"
                                                />
                                                <ErrorMessage name="email" component="div" />

                                                <label htmlFor="message">Message</label>
                                                <Field
                                                        id="message"
                                                        component="textarea"
                                                        name="message"
                                                        placeholder="Your enquiry here"
                                                        type="message"
                                                />
                                                <ErrorMessage name="message" component="div" />

                                                <button type="submit" disabled={isSubmitting}>
                                                        Submit
                                                </button>
                                        </Form>
                                )}
                        </Formik>
                </div>
        );
};

export default ContactForm;
