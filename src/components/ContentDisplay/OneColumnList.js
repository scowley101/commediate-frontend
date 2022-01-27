import React from 'react';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

function OneColumnList({ heading, cta, listItems, tagline }) {
        return (
                <div>
                        <h2>
                                <PortableText blocks={heading} />
                        </h2>
                        <p>
                                <PortableText blocks={heading} />
                        </p>
                        <ul>
                                {listItems.map((item) => (
                                        <li>
                                                <PortableText blocks={item.text} />
                                        </li>
                                ))}
                        </ul>
                        {cta ? <CTALink {...cta} /> : ''}
                </div>
        );
}

export default OneColumnList;
