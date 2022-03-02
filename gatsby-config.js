require('dotenv').config({
        path: `.env.${process.env.NODE_ENV}`,
});

const clientConfig = require('./client-config');

const isProd = process.env.NODE_ENV === 'production';

const siteUrl = `https://www.commediate.co.uk`;

module.exports = {
        siteMetadata: {
                siteUrl,
        },
        plugins: [
                {
                        resolve: 'gatsby-plugin-sitemap',
                        options: {
                                excludes: ['/frontpage/'],
                        },
                },
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
                // {
                //         resolve: `gatsby-plugin-google-analytics`,
                //         options: {
                //                 // The property ID; the tracking code won't be generated without it
                //                 trackingId: 'G-0EDFZ4TWGX',
                //                 // Defines where to place the tracking script - `true` in the head and `false` in the body
                //                 head: true,
                //                 // Setting this parameter is optional
                //                 anonymize: true,
                //         },
                // },
                // {
                //         resolve: `gatsby-plugin-cookiehub-banner`,
                //         options: {
                //                 // The ID is part of the CookieHub URL: https://cookiehub.net/cc/YOUR_COOKIEHUB_ID.js
                //                 cookieHubId: '5ab2c99b',
                //                 // Optional parameter (default false) - Use new v2 API.
                //                 // cookieHubV2Api: false,
                //                 // Categories configured with CookieHub
                //                 categories: [
                //                         {
                //                                 categoryName: 'analytics', // Unique id of the category which is set by Cookiehub.
                //                                 cookieName: 'gatsby-plugin-google-analytics-gdpr_cookies-enabled', // Your custom cookie name
                //                         },
                //                         // {
                //                         //         categoryName: 'marketing',
                //                         //         cookieName: 'marketing-enabled',
                //                         // },
                //                 ],
                //         },
                // },
                // {
                //         resolve: `gatsby-plugin-google-analytics-gdpr`,
                //         options: {
                //                 // The property ID; the tracking code won't be generated without it.
                //                 trackingId: 'G-0EDFZ4TWGX',
                //                 // Optional parameter (default false) - Enable analytics in development mode.
                //                 // enableDevelopment: true, // default false
                //                 // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
                //                 // anonymizeIP: true,
                //                 // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
                //                 // autoStartWithCookiesEnabled: false,
                //                 // Optional parameter - Configuration for react-ga and google analytics
                //                 // reactGaOptions: {
                //                 //         debug: true,
                //                 //         gaOptions: {
                //                 //                 sampleRate: 10,
                //                 //         },
                //                 // },
                //         },
                // },
                // {
                //         resolve: `gatsby-plugin-cookiehub`,
                //         options: {
                //                 // your cookiehub widget ID
                //                 cookihubId: `5ab2c99b`,
                //                 // your google analytics tracking id
                //                 trackingId: `G-0EDFZ4TWGX`,
                //                 // Puts tracking script in the head instead of the body
                //                 // head: false,
                //                 // enable ip anonymization
                //                 // anonymize: true,
                //         },
                // },
                {
                        resolve: `gatsby-plugin-gdpr-cookies`,
                        options: {
                                googleAnalytics: {
                                        trackingId: 'G-0EDFZ4TWGX', // leave empty if you want to disable the tracker
                                        cookieName: 'gatsby-gdpr-google-analytics', // default
                                        anonymize: true, // default
                                        allowAdFeatures: false, // default
                                },
                                // googleTagManager: {
                                //         trackingId: 'YOUR_GOOGLE_TAG_MANAGER_TRACKING_ID', // leave empty if you want to disable the tracker
                                //         cookieName: 'gatsby-gdpr-google-tagmanager', // default
                                //         dataLayerName: 'dataLayer', // default
                                // },
                                // facebookPixel: {
                                //         pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
                                //         cookieName: 'gatsby-gdpr-facebook-pixel', // default
                                // },
                                // tikTokPixel: {
                                //         pixelId: 'YOUR_TIKTOK_PIXEL_ID', // leave empty if you want to disable the tracker
                                //         cookieName: 'gatsby-gdpr-tiktok-pixel', // default
                                // },
                                // hotjar: {
                                //         hjid: 'YOUR_HOTJAR_ID',
                                //         hjsv: 'YOUR_HOTJAR_SNIPPET_VERSION',
                                //         cookieName: 'gatsby-gdpr-hotjar', // default
                                // },
                                // defines the environments where the tracking should be available  - default is ["production"]
                                environments: ['production', 'development'],
                        },
                },
                {
                        resolve: '@sentry/gatsby',
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
