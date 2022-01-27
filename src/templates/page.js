import React, { useState } from 'react';
import { graphql } from 'gatsby';
import GraphQLErrorList from '../components/graphql-error-list';
import Layout from '../containers/layout';
import SEO from '../components/SEO';

import ContentModules from './contentModules';

export const query = graphql`
        query PageTemplateQuery($id: String!) {
                route: sanityRoute(id: { eq: $id }) {
                        slug {
                                current
                        }
                        useSiteTitle
                        page {
                                ...PageInfo
                        }
                }
                site: sanitySiteSettings(id: { eq: "-db64c44d-3d29-5b9a-a3da-e69f38ea7181" }) {
                        title
                        openGraph {
                                title
                                description
                                image {
                                        ...SanityImage
                                }
                        }
                }
        }
`;

const Page = (props) => {
        const { data, errors } = props;

        if (errors) {
                return (
                        <Layout>
                                <GraphQLErrorList errors={errors} />
                        </Layout>
                );
        }

        const { site } = data || {};

        if (!site) {
                throw new Error(
                        'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
                );
        }

        const page = data.page || data.route.page;

        const content = (page._rawContent || []).filter((c) => !c.disabled);

        // const gradient = {
        //         from: (site.primaryColor && site.primaryColor.hex) || '#d53369',
        //         to: (site.secondaryColor && site.secondaryColor.hex) || '#daae51',
        // };

        const menuItems = page.navMenu && (page.navMenu.items || []);
        const pageTitle = data.route && !data.route.useSiteTitle && page.title;

        return (
                <Layout navMenuItems={menuItems}>
                        <SEO
                                title={pageTitle}
                                description={site.description}
                                keywords={site.keywords}
                                bodyAttr={{
                                        class: 'leading-normal tracking-normal text-white gradient',
                                }}
                                // gradient={gradient}
                        />
                        {content.map((c, i) => (
                                <ContentModules c={c} key={i} />
                        ))}
                </Layout>
        );
};

export default Page;
