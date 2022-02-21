require('dotenv').config({
        path: `.env.${process.env.NODE_ENV}`,
});

const clientConfig = require('./client-config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
        plugins: [
                {
                        resolve: `gatsby-plugin-scroll-reveal`,
                        options: {
                                threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
                                once: true, // Defines if animation needs to be launched once
                                disable: false, // Flag for disabling animations

                                // Advanced Options
                                selector: '[data-sal]', // Selector of the elements to be animated
                                animateClassName: 'sal-animate', // Class name which triggers animation
                                disabledClassName: 'sal-disabled', // Class name which defines the disabled state
                                rootMargin: '0% 50%', // Corresponds to root's bounding box margin
                                enterEventName: 'sal:in', // Enter event name
                                exitEventName: 'sal:out', // Exit event name
                        },
                },
                {
                        resolve: 'gatsby-source-sanity',
                        options: {
                                ...clientConfig.sanity,
                                token: process.env.SANITY_TOKEN,
                                // TODO switch for production when deploying
                                watchMode: !isProd,
                                overlayDrafts: !isProd,
                        },
                },
                {
                        resolve: `gatsby-plugin-google-fonts`,
                        options: {
                                fonts: [`DM Sans\:400,400i,500,500i,700,700i`],
                                display: 'swap',
                        },
                },
                {
                        resolve: `gatsby-plugin-google-analytics`,
                        options: {
                                // The property ID; the tracking code won't be generated without it
                                trackingId: 'G-0EDFZ4TWGX',
                                // Defines where to place the tracking script - `true` in the head and `false` in the body
                                head: true,
                                // Setting this parameter is optional
                                anonymize: true,
                        },
                },
                {
                        resolve: '@sentry/gatsby',
                        options: {
                                dsn: 'https://c26704a04e0c4f87a5ff91ae7423d83e@o1149408.ingest.sentry.io/6221532',
                                sampleRate: 0.7,
                        },
                },
                'gatsby-plugin-styled-components',
                'gatsby-plugin-react-helmet',
                'gatsby-plugin-image',
                'gatsby-plugin-sharp',
                'gatsby-transformer-sharp',

                {
                        resolve: 'gatsby-plugin-sanity-image',
                },
        ],
};
