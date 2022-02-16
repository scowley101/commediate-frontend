import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Nav from './Nav';

import NavMobile from './NavMobile';

const LayoutStyles = styled.div`
        overflow-x: hidden;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
`;

function Layout(props) {
        const { children, onHideNav, onShowNav, showNav, siteTitle, navMenuItems, footerNavItems } = props;

        return (
                <>
                        <Nav
                                navMenuItems={navMenuItems}
                                siteTitle={siteTitle}
                                onHideNav={onHideNav}
                                onShowNav={onShowNav}
                                showNav={showNav}
                                
                        />
                        <NavMobile
                                navMenuItems={navMenuItems}
                                siteTitle={siteTitle}
                                onHideNav={onHideNav}
                                onShowNav={onShowNav}
                                showNav={showNav}
                        />
                        <>{children}</>
                        <Footer
                                footerNavItems={footerNavItems}
                                siteTitle={siteTitle}
                                onHideNav={onHideNav}
                                onShowNav={onShowNav}
                                showNav={showNav}
                        />
                        <GlobalStyles />
                        <Typography />
                </>
        );
}

export default Layout;
