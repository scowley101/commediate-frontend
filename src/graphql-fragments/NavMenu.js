import { graphql } from 'gatsby';

export const NavMenu = graphql`
        fragment NavMenu on SanityNavigationMenu {
                items {
                        title
                        kind
                        link
                        route
                        linkIcon {
                                iconifyTitle
                        }
                        landingPageRoute {
                                ... on SanityRoute {
                                        id
                                        _type
                                        slug {
                                                current
                                        }
                                }
                        }
                }
        }
`;
