// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { ButtonStyles } from './CTALink';

const ContactFormStyles = styled.div`
        form {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                position: relative;
                bottom: 1rem;
        }

        input,
        textArea {
                border: 1px solid var(--cmBlue);
                background-color: var(--cmGrey);
                width: 100%;
                ::placeholder {
                        color: var(--cmLightGrey);
                        font-family: var(--dmSans);
                        padding: 0.75rem;
                }
        }
        input {
                height: 2.5rem;
        }
        textArea {
                height: 30vh;
        }
        button {
                margin-top: 1.75rem;
        }
`;

const ContactForm = () => {
        const encode = (data) =>
                Object.keys(data)
                        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
                        .join('&');
        return (
                <ContactFormStyles>
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
                                                <label htmlFor="fullName">
                                                        <h7>Full Name</h7>
                                                </label>
                                                <Field id="fullName" name="fullName" placeholder="Your full name" />
                                                <ErrorMessage name="fullName" component="div" />

                                                <label htmlFor="email">
                                                        <h7>Email</h7>
                                                </label>
                                                <Field
                                                        id="email"
                                                        name="email"
                                                        placeholder="jane@acme.com"
                                                        type="email"
                                                />
                                                <ErrorMessage name="email" component="div" />

                                                <label htmlFor="message">
                                                        <h7>Message</h7>
                                                </label>
                                                <Field
                                                        id="message"
                                                        component="textarea"
                                                        name="message"
                                                        placeholder="Your enquiry here"
                                                        type="message"
                                                />
                                                <ErrorMessage name="message" component="div" />

                                                <ButtonStyles type="submit" disabled={isSubmitting}>
                                                        Submit
                                                </ButtonStyles>
                                        </Form>
                                )}
                        </Formik>
                </ContactFormStyles>
        );
};

export default ContactForm;
