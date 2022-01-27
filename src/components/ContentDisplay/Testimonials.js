import React from 'react';
import PortableText from '../PortableText';

function Testimonials({ heading, clientTestimonials }) {
        return (
                <div>
                        <h2>
                                <PortableText blocks={heading} />
                        </h2>
                        {clientTestimonials.map((testimonial) => (
                                <>
                                        <PortableText blocks={testimonial.quote} />
                                        <p>
                                                {testimonial.clientName}
                                                {testimonial.clientBusiness ? `, ${testimonial.clientBusiness}` : ''}
                                        </p>
                                </>
                        ))}
                </div>
        );
}

export default Testimonials;
