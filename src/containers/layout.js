import { graphql, StaticQuery } from 'gatsby';
import React, { useState } from 'react';
import Layout from '../components/Layout';

const query = graphql`
        query SiteLayoutQuery {
                site: sanitySiteSettings(id: { eq: "-db64c44d-3d29-5b9a-a3da-e69f38ea7181" }) {
                        title
                }
                nav: sanityNavigationMenu(title: { eq: "Desktop Navigation" }) {
                        ...NavMenu
                }
                footer: sanityNavigationMenu(title: { eq: "Footer" }) {
                        ...NavMenu
                }
        }
`;

function LayoutContainer(props) {
        const [showNav, setShowNav] = useState(true);
        function handleShowNav() {
                setShowNav(true);
        }
        function handleHideNav() {
                setShowNav(false);
        }

        return (
                <StaticQuery
                        query={query}
                        render={(data) => {
                                // const { site, nav, footer } = data || {};

                                if (!data.site) {
                                        throw new Error(
                                                'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
                                        );
                                }
                                const menuItems = data.nav.items || [];
                                const footerItems = data.footer.items || [];
                                return (
                                        <Layout
                                                {...props}
                                                navMenuItems={menuItems}
                                                footerNavItems={footerItems}
                                                showNav={showNav}
                                                siteTitle={data.site.title}
                                                onHideNav={handleHideNav}
                                                onShowNav={handleShowNav}
                                        />
                                );
                        }}
                />
        );
}

export default LayoutContainer;
