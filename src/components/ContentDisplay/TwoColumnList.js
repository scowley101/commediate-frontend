import React from 'react';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

function TwoColumnList({ heading, cta, listItems, tagline }) {
        return (
                <div>
                        <h4>
                                <PortableText blocks={heading} />
                        </h4>
                        <p>
                                <PortableText blocks={tagline} />
                        </p>
                        {cta ? <CTALink {...cta} /> : ''}
                        <ul>
                                {listItems.map((item) => (
                                        <li>
                                                <PortableText blocks={item.text} />
                                        </li>
                                ))}
                        </ul>
                </div>
        );
}

export default TwoColumnList;
