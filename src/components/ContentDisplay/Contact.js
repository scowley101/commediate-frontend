import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';
import CTALink from '../CTALink';
import ContactForm from '../ContactForm';

const ContactStyles = styled.div`
        padding-left: var(--bodySidePadding);
        padding-right: var(--bodySidePadding);
        margin-top: 3.5rem;
        margin-bottom: var(--verticalPadding);
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        .text-container,
        .form-container {
                width: 45vw;
        }
        .text-container {
                margin-right: 1rem;
                .tagline > * {
                        margin: 0;
                }
        }

        .form-container {
                margin-left: 1rem;
        }
`;

function Contact({ backgroundColorRadio, heading, tagline, isForm }) {
        const backGround = backgroundColorRadio?.backgroundColor;

        return (
                <ContactStyles className={backGround}>
                        <div className="text-container">
                                <PortableText className="heading" blocks={heading} />
                                <PortableText className="tagline" blocks={tagline} />
                        </div>
                        <div className="form-container">
                                <ContactForm />
                        </div>
                </ContactStyles>
        );
}

export default Contact;
