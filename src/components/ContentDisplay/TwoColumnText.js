import React from 'react';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

function TwoColumnText({ cta, heading, tagline }) {
        return (
                <div>
                        <h4>
                                <PortableText blocks={heading} />
                        </h4>
                        <CTALink {...cta} />
                        <p>
                                <PortableText blocks={tagline} />
                        </p>
                </div>
        );
}

export default TwoColumnText;
