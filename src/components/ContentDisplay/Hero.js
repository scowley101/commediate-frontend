import React from 'react';
import { Link } from 'gatsby';

import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import clientConfig from '../../../client-config';
import PortableText from '../PortableText';

const maybeImage = (illustration) => {
        let img = null;
        if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
                const imageData = getGatsbyImageData(illustration.image, { maxWidth: 960 }, clientConfig.sanity);

                img = <GatsbyImage className="w-full md:w-4/5 z-50" image={imageData} alt={illustration.image.alt} />;
        }
        return img;
};

function Hero({ cta, heading, illustration, tagline }) {
        const img = maybeImage(illustration);
        return (
                <div>
                        <h2>
                                <PortableText blocks={heading} />
                        </h2>
                        {tagline ? (
                                <h6>
                                        <PortableText blocks={tagline} />
                                </h6>
                        ) : (
                                ''
                        )}
                        {/* <h2>{heading}</h2>
                        <p>{tagline}</p> */}
                        {/* <Link to={cta.route}>{cta.title}</Link> */}
                        <div className="">{img}</div>
                </div>
        );
}

export default Hero;
