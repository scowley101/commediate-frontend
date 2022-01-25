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
                        resolve: 'gatsby-source-sanity',
                        options: {
                                projectId: 'mnpavw3y',
                                // TODO switch for production when deploying
                                dataset: 'production',
                                watchMode: true,
                                token: process.env.SANITY_TOKEN,
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
