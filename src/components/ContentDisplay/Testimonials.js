import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';

const TestimonialsStyles = styled.div`
        padding: var(--componentPadding);

        .testimonial-container {
                margin-top: 3.125rem;
                display: grid;
                grid-gap: 2rem;
                grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

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

function Testimonials({ heading, clientTestimonials }) {
        return (
                <TestimonialsStyles>
                        <div>
                                <PortableText data-sal="fade" blocks={heading} />
                                <div className="testimonial-container">
                                        {clientTestimonials.map((testimonial, i) => (
                                                <div className="individual" data-sal="fade" data-sal-delay={i * 100}>
                                                        <PortableText blocks={testimonial.quote} />
                                                        <p className="text-base-bold customer">
                                                                {testimonial.clientName}
                                                                {testimonial.clientBusiness
                                                                        ? `, ${testimonial.clientBusiness}`
                                                                        : ''}
                                                        </p>
                                                </div>
                                        ))}
                                </div>
                        </div>
                </TestimonialsStyles>
        );
}

export default Testimonials;
