import React from 'react';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

function TwoColumnText({ cta, heading, tagline }) {
        return (
                <div>
                        <h2>
                                <PortableText blocks={heading} />
                        </h2>
                        <CTALink {...cta} />
                        <p>
                                <PortableText blocks={tagline} />
                        </p>
                </div>
        );
}

export default TwoColumnText;
