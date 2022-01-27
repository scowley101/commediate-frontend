import React from 'react';
import PortableText from '../PortableText';

function Testimonials({ heading, clientTestimonials }) {
        return (
                <div>
                        <h4>
                                <PortableText blocks={heading} />
                        </h4>
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
