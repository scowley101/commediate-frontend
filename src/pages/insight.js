import React from 'react';
import { graphql } from 'gatsby';
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, filterOutDocsPublishedInTheFuture } from '../utils/helpers';
import BlogPostPreviewList from '../components/blog/blog-post-preview-list';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/SEO';
import Layout from '../containers/layout';

// export const InsightPageQuery = graphql`
//         query InsightPageQuery {
//                 page: sanityPage(id: { eq: "-926b7f62-3d20-5cc6-bfce-1185afc9c8e7" }) {
//                         ...PageInfo
//                 }

//                 site: sanitySiteSettings(id: { eq: "-db64c44d-3d29-5b9a-a3da-e69f38ea7181" }) {
//                         title
//                         openGraph {
//                                 title
//                                 description
//                                 image {
//                                         ...SanityImage
//                                 }
//                         }
//                 }
//         }
// `;

export const query = graphql`
        query IndexPageQuery {
                page: sanityPage(id: { eq: "-926b7f62-3d20-5cc6-bfce-1185afc9c8e7" }) {
                        ...PageInfo
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
                nav: sanityNavigationMenu(title: { eq: "Desktop Navigation" }) {
                        ...NavMenu
                }
                footer: sanityNavigationMenu(title: { eq: "Footer" }) {
                        ...NavMenu
                }
                posts: allSanityPost(
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

const InsightPage = (props) => {
        const { data, errors } = props;

        if (errors) {
                return (
                        <Layout>
                                <GraphQLErrorList errors={errors} />
                        </Layout>
                );
        }
        const { site, nav, footer, page } = data || {};

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
                        <SEO
                                title={page.title || 'Missing title'}
                                description={site.description || 'Missing description'}
                                keywords={site.keywords || []}
                        />
                        <Container>
                                {/* <h1 hidden>Welcome to {site.title}</h1> */}
                                <div className="py-6">{postNodes && <BlogPostPreviewList nodes={postNodes} />}</div>
                        </Container>
                </Layout>
        );
};

export default InsightPage;
