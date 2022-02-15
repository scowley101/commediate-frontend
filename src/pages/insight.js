import React from 'react';
import { graphql } from 'gatsby';
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, filterOutDocsPublishedInTheFuture } from '../utils/helpers';
import BlogPostPreviewList from '../components/blog/blog-post-preview-list';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/SEO';
import Layout from '../containers/layout';

export const query = graphql`
        query IndexPageQuery {
                site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
                        title
                }
                nav: sanityNavigationMenu(title: { eq: "Desktop Navigation" }) {
                        ...NavMenu
                }
                footer: sanityNavigationMenu(title: { eq: "Footer" }) {
                        ...NavMenu
                }
                posts: allSanityPost(
                        limit: 6
                        sort: { fields: [publishedAt], order: DESC }
                        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
                ) {
                        edges {
                                node {
                                        id
                                        publishedAt
                                        mainImage {
                                                ...SanityImage
                                                alt
                                        }
                                        title
                                        _rawExcerpt
                                        slug {
                                                current
                                        }
                                }
                        }
                }
        }
`;

const IndexPage = (props) => {
        const { data, errors } = props;

        if (errors) {
                return (
                        <Layout>
                                <GraphQLErrorList errors={errors} />
                        </Layout>
                );
        }

        const { site, nav, footer } = data || {};

        const postNodes = (data || {}).posts
                ? mapEdgesToNodes(data.posts)
                          .filter(filterOutDocsWithoutSlugs)
                          .filter(filterOutDocsPublishedInTheFuture)
                : [];

        if (!site) {
                console.warn(
                        'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
                );
        }

        const menuItems = nav.items || [];
        const footerItems = footer.items || [];

        return (
                <Layout navMenuItems={menuItems} footerNavItems={footerItems} textWhite={false}>
                        {/* <SEO
                                title={site.title || 'Missing title'}
                                description={site.description || 'Missing description'}
                                keywords={site.keywords || []}
                        /> */}
                        <Container>
                                {/* <h1 hidden>Welcome to {site.title}</h1> */}
                                <div className="py-6">{postNodes && <BlogPostPreviewList nodes={postNodes} />}</div>
                        </Container>
                </Layout>
        );
};

export default IndexPage;
