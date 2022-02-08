import { graphql } from 'gatsby';

export const PostInfo = graphql`
        fragment PageInfo on SanityPage {
                id
                navMenu {
                        ...NavMenu
                }
                footerNav {
                        ...NavMenu
                }
                _rawContent(resolveReferences: { maxDepth: 10 })
                title
        }
`;
