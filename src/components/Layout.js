import React, { useState } from 'react';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Nav from './Nav';

function Layout(props) {
        const { children, onHideNav, onShowNav, showNav, siteTitle, navMenuItems } = props;

        return (
                <>
                        <Nav
                                navMenuItems={navMenuItems}
                                siteTitle={siteTitle}
                                onHideNav={onHideNav}
                                onShowNav={onShowNav}
                                showNav={showNav}
                        />
                        <>{children}</>
                        <Footer
                                navMenuItems={navMenuItems}
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
