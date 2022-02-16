import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';

const TestimonialsStyles = styled.div`
        padding: var(--componentPadding);

        .testimonial-container {
                margin-top: 3.125rem;
                display: grid;
                grid-gap: 2rem;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

                .individual {
                        display: flex;
                        flex-direction: column;
                }
        }

        h5 {
                margin: 0;
        }

        .review {
                margin: 0;
        }

        .customer {
                margin-top: 0.75rem;
                margin-bottom: 0;
        }
`;

function Testimonials({ backgroundColorRadio, heading, clientTestimonials }) {
        const backGround = backgroundColorRadio?.backgroundColor;

        return (
                <TestimonialsStyles className={backGround}>
                        <div>
                                <PortableText blocks={heading} />
                                <div className="testimonial-container">
                                        {clientTestimonials.map((testimonial, i) => (
                                                <div className="individual">
                                                        <PortableText blocks={testimonial.quote} />
                                                        <p className="text-base-bold customer">
                                                                <span className="orange-underline-container">
                                                                        <span className="orange-underline-text">
                                                                                {testimonial.clientName}
                                                                                {testimonial.clientBusiness
                                                                                        ? `, ${testimonial.clientBusiness}`
                                                                                        : ''}
                                                                        </span>
                                                                </span>
                                                        </p>
                                                </div>
                                        ))}
                                </div>
                        </div>
                </TestimonialsStyles>
        );
}

export default Testimonials;
