import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import BlogPost from '../components/blog/blog-post';
import SEO from '../components/SEO';
import Layout from '../containers/layout';
import { toPlainText } from '../utils/helpers';

export const query = graphql`
        query BlogPostTemplateQuery($id: String!) {
                nav: sanityNavigationMenu(title: { eq: "Desktop Navigation" }) {
                        ...NavMenu
                }
                footer: sanityNavigationMenu(title: { eq: "Footer" }) {
                        ...NavMenu
                }
                post: sanityPost(id: { eq: $id }) {
                        id
                        publishedAt
                        categories {
                                _id
                                title
                        }
                        mainImage {
                                ...SanityImage
                                alt
                        }
                        title
                        slug {
                                current
                        }
                        _rawExcerpt(resolveReferences: { maxDepth: 5 })
                        _rawBody(resolveReferences: { maxDepth: 5 })
                        authors {
                                _key
                                author {
                                        image {
                                                crop {
                                                        _key
                                                        _type
                                                        top
                                                        bottom
                                                        left
                                                        right
                                                }
                                                hotspot {
                                                        _key
                                                        _type
                                                        x
                                                        y
                                                        height
                                                        width
                                                }
                                                asset {
                                                        _id
                                                }
                                        }
                                        name
                                }
                        }
                }
        }
`;

const BlogPostTemplate = (props) => {
        const { data, errors } = props;
        const post = data && data.post;
        const { nav, footer } = data || {};
        const menuItems = nav.items || [];
        const footerItems = footer.items || [];

        return (
                <Layout navMenuItems={menuItems} footerNavItems={footerItems} textWhite>
                        {errors && <SEO title="GraphQL Error" />}
                        {post && (
                                <SEO
                                        title={post.title || 'Untitled'}
                                        description={toPlainText(post._rawExcerpt)}
                                        image={post.mainImage}
                                />
                        )}

                        {errors && (
                                <Container>
                                        <GraphQLErrorList errors={errors} />
                                </Container>
                        )}

                        {post && <BlogPost {...post} />}
                </Layout>
        );
};

export default BlogPostTemplate;
