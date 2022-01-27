import React from 'react';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

function OneColumnText({ cta, heading, tagline }) {
        return (
                <div>
                        <h2>
                                <PortableText blocks={heading} />
                        </h2>
                        <p>
                                <PortableText blocks={tagline} />
                        </p>
                        <CTALink {...cta} />
                </div>
        );
}

export default OneColumnText;
