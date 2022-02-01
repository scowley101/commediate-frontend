require('dotenv').config({
        path: `.env.${process.env.NODE_ENV}`,
});

const clientConfig = require('./client-config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
        // siteMetadata: {
        //         title: '',
        //         siteUrl: '',
        //         description: '',
        // },
        plugins: [
                {
                        resolve: `gatsby-plugin-scroll-reveal`,
                        // options: {
                        //         threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
                        //         once: true, // Defines if animation needs to be launched once
                        // },
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
                'gatsby-plugin-styled-components',
                'gatsby-plugin-react-helmet',
                'gatsby-plugin-image',
                'gatsby-plugin-sharp',
                'gatsby-transformer-sharp',

                {
                        resolve: 'gatsby-plugin-sanity-image',
                        options: {
                                // Sanity project info (required)
                                projectId: 'mnpavw3y',
                                dataset: 'production',
                        },
                },
        ],
};
