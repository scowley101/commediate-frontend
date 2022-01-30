import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
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
                                projectId: 'mnpavw3y',
                                // TODO switch for production when deploying
                                dataset: 'production',
                                watchMode: true,
                                token: process.env.SANITY_TOKEN,
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
