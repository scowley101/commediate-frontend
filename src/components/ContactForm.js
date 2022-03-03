// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage, getIn } from 'formik';
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

        .error {
                color: red;
        }
`;

const ContactForm = () => {
        function getFieldStyles(errors, fieldName) {
                if (getIn(errors, fieldName)) {
                        return {
                                border: '1px solid red',
                        };
                }
        }
        function getTitleStyles(errors, fieldName) {
                if (getIn(errors, fieldName)) {
                        return {
                                color: 'red',
                        };
                }
        }

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
                                                .then(
                                                        () => {
                                                                alert('Success');
                                                                actions.resetForm();
                                                        }

                                                        // (
                                                        //         // alert('Success');
                                                        //         <div className="submit-success">
                                                        //                 <h6>Enquiry successfully Submitted</h6>
                                                        //                 <p>We will be in touch soon.</p>

                                                        //                 <button type="button" onClick={actions.resetForm()}>
                                                        //                         Reset form
                                                        //                 </button>
                                                        //         </div>
                                                        // )
                                                )
                                                .catch(() => {
                                                        alert('Error');
                                                })
                                                .finally(() => actions.setSubmitting(false));
                                }}
                        >
                                {({ isSubmitting, errors }) => (
                                        <Form name="contact" data-netlify>
                                                <label htmlFor="fullName">
                                                        <h7 style={getTitleStyles(errors, 'fullName')}>Full Name</h7>
                                                </label>
                                                <Field
                                                        style={getFieldStyles(errors, 'fullName')}
                                                        id="fullName"
                                                        name="fullName"
                                                />
                                                <ErrorMessage
                                                        className="full-name-error error text-sm"
                                                        name="fullName"
                                                        component="div"
                                                />

                                                <label htmlFor="email">
                                                        <h7 style={getTitleStyles(errors, 'email')}>Email</h7>
                                                </label>
                                                <Field
                                                        style={getFieldStyles(errors, 'email')}
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                />
                                                <ErrorMessage
                                                        className="email-error error text-sm"
                                                        name="email"
                                                        component="div"
                                                />

                                                <label htmlFor="message">
                                                        <h7 style={getTitleStyles(errors, 'message')}>Message</h7>
                                                </label>
                                                <Field
                                                        style={getFieldStyles(errors, 'message')}
                                                        id="message"
                                                        component="textarea"
                                                        name="message"
                                                        type="message"
                                                />
                                                <ErrorMessage
                                                        className="message-error error text-sm"
                                                        name="message"
                                                        component="div"
                                                />

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
