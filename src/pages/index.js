import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Slider from 'react-slick';
import Errors from '../components/errors';
import Page from '../templates/page';

export const query = graphql`
        fragment SanityImage on SanityMainImage {
                alt
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
                        metadata {
                                lqip
                                dimensions {
                                        aspectRatio
                                        width
                                        height
                                }
                        }
                }
        }

        query FrontpageQuery {
                page: sanityPage(id: { eq: "-3e23cdb0-238f-5dfa-bd68-e7a139b2ba97" }) {
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
        }
`;

const IndexPage = (props) => {
        const { data, errors } = props;

        if (errors) {
                return <Errors errors={errors} />;
        }

        return <Page data={data} />;
};

export default IndexPage;
